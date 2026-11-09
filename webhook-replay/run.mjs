import { replayWebhookEvents, scenarios } from './replay.mjs';

const name = process.argv[2] || 'repeated';
if (!Object.hasOwn(scenarios, name)) {
  console.error('Usage: node webhook-replay/run.mjs [repeated|late|retry]');
  process.exitCode = 2;
} else {
  console.log(JSON.stringify(replayWebhookEvents(scenarios[name]), null, 2));
}
