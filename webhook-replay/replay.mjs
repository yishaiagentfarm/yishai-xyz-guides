export const scenarios = {
  repeated: [
    { id: 'event-101', record: 'REQ-01', revision: 1, state: 'open' },
    { id: 'event-101', record: 'REQ-01', revision: 1, state: 'open' },
    { id: 'event-101', record: 'REQ-01', revision: 1, state: 'closed' },
  ],
  late: [
    { id: 'event-203', record: 'REQ-02', revision: 3, state: 'closed' },
    { id: 'event-202', record: 'REQ-02', revision: 2, state: 'open' },
  ],
  retry: [
    { id: 'event-301', record: 'REQ-03', revision: 1, state: 'open', available: false },
    { id: 'event-301', record: 'REQ-03', revision: 1, state: 'open' },
  ],
};

export function replayWebhookEvents(events) {
  const seen = new Map();
  const records = new Map();
  const outcomes = [];

  for (const { id, record, revision, state, available = true } of events) {
    const payload = JSON.stringify([record, revision, state]);
    const current = records.get(record);
    let outcome;

    if (!id || !record || !Number.isSafeInteger(revision) || revision < 1 || !['open', 'closed'].includes(state)) {
      outcome = 'invalid';
    } else if (seen.has(id)) {
      outcome = seen.get(id) === payload ? 'duplicate' : 'conflict';
    } else if (current && revision <= current.revision) {
      outcome = revision === current.revision && state !== current.state ? 'conflict' : 'stale';
      seen.set(id, payload);
    } else if (!available) {
      outcome = 'retry';
    } else {
      records.set(record, { record, revision, state });
      seen.set(id, payload);
      outcome = 'recorded';
    }
    outcomes.push({ id, record, revision, state, outcome });
  }
  return { outcomes, records: Array.from(records.values()) };
}
