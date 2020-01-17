const core = require('@actions/core');
const github = require('@actions/github');
const analyze = require('./analyze');
const convertConfig = require('./util-config');

const configProperties = [
  'use-yarn',
  'repo-token',
];

async function main() {
  try {
    await analyze(convertConfig(config));
  } catch (e) {
    core.setFailed(e.message);
  }
}

main();
