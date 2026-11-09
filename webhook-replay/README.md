# Webhook replay sample

Run from the repository root with Node.js:

```sh
node webhook-replay/run.mjs repeated
node webhook-replay/run.mjs late
node webhook-replay/run.mjs retry
```

| Scenario | Expected outcomes | Final record |
| --- | --- | --- |
| repeated | recorded, duplicate, conflict | REQ-01, revision 1, open |
| late | recorded, stale | REQ-02, revision 3, closed |
| retry | retry, recorded | REQ-03, revision 1, open |

The events are synthetic. The replay logic operates on local in-memory data and shares its fixtures with the [browser simulator](https://yishai.xyz/en/resources/webhook-replay/). A live integration needs provider-specific signature checks, durable idempotency state, transactional updates, permissions, and monitoring.

[עברית](https://yishai.xyz/resources/webhook-replay/) · [Integration guide](https://yishai.xyz/en/guides/api-webhook-integration/)
