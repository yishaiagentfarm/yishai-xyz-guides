# yishai.xyz

[עברית](https://yishai.xyz/) · [English](https://yishai.xyz/en/)

**yishai.xyz** עוסק בבנייה ושיפור אתרים, בפיתוח תוכנה וכלים בהתאמה אישית ובחיבור מערכות. שירותי האוטומציה כוללים העברת מידע בין כלים, עדכון רשומות והפקת דוחות. אפשר לשלב בינה מלאכותית במשימות כמו מיון פניות וחילוץ מידע ממסמכים, עם בדיקה אנושית לפי הצורך.

## כלים להערכה ולבדיקה · Planning and testing tools

| Resource | עברית | English |
| --- | --- | --- |
| Launch checklist | [בדיקות לפני השקת אתר](https://yishai.xyz/resources/website-launch-checklist/) | [Website launch checklist](https://yishai.xyz/en/resources/website-launch-checklist/) |
| Time savings | [מחשבון חיסכון באוטומציה](https://yishai.xyz/resources/automation-savings-calculator/) | [Automation calculator](https://yishai.xyz/en/resources/automation-savings-calculator/) |
| Pilot readiness | [בדיקת מוכנות לפיילוט AI](https://yishai.xyz/resources/ai-pilot-readiness/) | [AI pilot readiness check](https://yishai.xyz/en/resources/ai-pilot-readiness/) |
| Replay simulator | [הדמיית Webhook](https://yishai.xyz/resources/webhook-replay/) | [Webhook replay simulator](https://yishai.xyz/en/resources/webhook-replay/) |

The [runnable replay example](webhook-replay/) shows the expected record after each scenario. The [synthetic intake dataset](data/inquiry-routing-dataset.json) contains 18 Hebrew, English, and mixed-language inquiries with manually specified routes. The [editable worksheets](templates/) cover website quotes, workflow inventories, and pilot reviews.

[כל הכלים והתבניות](https://yishai.xyz/resources/) · [All tools and templates](https://yishai.xyz/en/resources/) · [Download the offline kit](https://github.com/yishaiagentfarm/yishai-xyz-guides/releases/tag/planning-kit-v1)

## דוגמה לתכנון אוטומציה לקליטת פניות

נניח שפניות מגיעות מטופס באתר ומועתקות ידנית לרשימת מעקב. גרסה ראשונה יכולה להעביר כל פנייה לרשימה, לשייך אחראי ולהציג מה צריך לקרות בשלב הבא.

| שלב | מה מגדירים לפני הפיתוח |
| --- | --- |
| טופס באתר | אוספים את הפרטים הדרושים לטיפול בפנייה ומציגים אישור לאחר קליטה. |
| רשימת מעקב | שומרים את הפנייה המקורית, מזהה קבוע, אחראי ומצב טיפול. שליחה חוזרת עם אותו מזהה מעדכנת את הרשומה הקיימת. |
| חריגים ומעקב | נתון חסר או תקלה בחיבור עוברים לבדיקה. תזכורת נשלחת לפנייה שעדיין ממתינה לטיפול. |
| בדיקה | מריצים פנייה תקינה, פנייה כפולה ופנייה עם נתון חסר. בודקים מה קורה כשמערכת היעד חוזרת לפעול אחרי ניתוק. |

כדאי למדוד כמה זמן נדרש היום מרגע קבלת הפנייה ועד לשיוך אחראי, ולהשוות אחרי תקופת ניסיון. אם התוכן החופשי מקשה על מיון הפניות, אפשר לבדוק סיווג בעזרת AI על נתוני דוגמה ולהגדיר מי מאשר מקרים לא ברורים.

להמשך התכנון, ראו את [המדריך לבחירת אוטומציה ראשונה](https://yishai.xyz/guides/first-automation/).

- [אוטומציות לעסקים וחיבור מערכות](https://yishai.xyz/services/automation/)
- [בניית אתרים ושדרוג אתרים קיימים](https://yishai.xyz/services/websites/)
- [פיתוח תוכנה בהתאמה אישית](https://yishai.xyz/services/software/)
- [הטמעת AI לעסקים](https://yishai.xyz/services/automation/ai/)

## English summary

**yishai.xyz** builds and improves websites, develops custom tools, and connects systems. A project might cover a single website, a shared internal workspace, or a repeatable process such as syncing records and preparing reports.

The example above takes a website inquiry from a form to a shared follow-up queue. Keep a stable submission ID so retries update the same record, route incomplete requests to review, and test what happens when the destination is unavailable. Measure the time from submission to assignment before and after a small pilot. If AI helps classify free-text inquiries, test the suggestions on representative examples and assign a person to review uncertain cases.

See the [project planning guides](https://yishai.xyz/en/guides/) for website briefs, automation scope, custom software decisions, and AI workflow tests. This is an illustrative workflow published by yishai.xyz.

## דוגמאות להרצה ולבדיקה

- [דוח שבועי משני קובצי CSV](weekly_report_sample.py) מדגים שלוש פניות תקינות, כפילות אחת ושתי פניות לבדיקה. אפשר להריץ את הקובץ ב־Python 3.
- [דוגמאות לבדיקת תהליך AI](ai_evaluation_samples.json) כוללות קלט מלאכותי ותוצאה צפויה למיון פניות בעברית ולחילוץ נתונים ממסמך.

## Runnable examples

Run the [weekly CSV report sample](weekly_report_sample.py) with Python 3 to see how the rules handle duplicates, missing data, and conflicting records.

```sh
python3 weekly_report_sample.py
```

The [AI evaluation examples](ai_evaluation_samples.json) pair fictional inputs with expected outputs for Hebrew inquiry triage and document extraction.

## Project walkthroughs

Each walkthrough includes an example, checks to run, and a short project brief.

| Topic | עברית | English |
| --- | --- | --- |
| Bilingual websites | [אתר דו־לשוני](https://yishai.xyz/guides/bilingual-website/) | [Bilingual website](https://yishai.xyz/en/guides/bilingual-website/) |
| Redesign redirects | [שדרוג אתר והפניות](https://yishai.xyz/guides/website-redesign/) | [Website redesign](https://yishai.xyz/en/guides/website-redesign/) |
| Weekly reporting | [אוטומציה לדוח שבועי](https://yishai.xyz/guides/weekly-report-automation/) | [Weekly report automation](https://yishai.xyz/en/guides/weekly-report-automation/) |
| Approval workflows | [אוטומציה לתהליך אישור](https://yishai.xyz/guides/approval-workflow-automation/) | [Approval workflow automation](https://yishai.xyz/en/guides/approval-workflow-automation/) |
| AI inquiry triage | [מיון פניות בעברית](https://yishai.xyz/guides/ai-inquiry-triage/) | [AI inquiry triage](https://yishai.xyz/en/guides/ai-inquiry-triage/) |
| AI document extraction | [חילוץ נתונים ממסמכים](https://yishai.xyz/guides/ai-document-extraction/) | [AI document extraction](https://yishai.xyz/en/guides/ai-document-extraction/) |
