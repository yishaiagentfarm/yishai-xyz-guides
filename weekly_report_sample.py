"""Build a weekly summary from two fictional CSV exports."""
from collections import Counter, defaultdict
from csv import DictReader
from io import StringIO
import json

SOURCES = {
    "requests-a.csv": """id,team,status
R-101,web,open
R-102,support,closed
R-103,support,
R-105,web,open
""",
    "requests-b.csv": """id,team,status
R-101,web,open
R-104,support,open
R-105,web,closed
""",
}


def summarize(sources):
    grouped = defaultdict(list)
    issues = []
    for filename, contents in sources.items():
        reader = DictReader(StringIO(contents))
        if reader.fieldnames != ["id", "team", "status"]:
            raise ValueError(f"{filename} has unexpected columns")
        for row in reader:
            missing = [name for name in reader.fieldnames if not row[name]]
            if missing:
                issues.append({"id": row["id"], "files": [filename], "reason": "Missing " + ", ".join(missing)})
                continue
            grouped[row["id"]].append((filename, row["team"], row["status"]))

    duplicate_rows = 0
    counts = Counter()
    for record_id, rows in sorted(grouped.items()):
        values = {(team, status) for _, team, status in rows}
        duplicate_rows += len(rows) - len(values)
        if len(values) > 1:
            issues.append({
                "id": record_id,
                "files": sorted({filename for filename, _, _ in rows}),
                "reason": "Conflicting values",
            })
            continue
        (_, status), = values
        counts[status] += 1

    return {"included": sum(counts.values()), "by_status": dict(counts), "duplicates": duplicate_rows, "review": issues}


if __name__ == "__main__":
    report = summarize(SOURCES)
    assert report["included"] == 3
    assert report["by_status"] == {"open": 2, "closed": 1}
    assert report["duplicates"] == 1
    assert [(row["id"], row["reason"]) for row in report["review"]] == [
        ("R-103", "Missing status"),
        ("R-105", "Conflicting values"),
    ]
    print(json.dumps(report, indent=2))
