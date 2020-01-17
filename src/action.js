import { convertConfig } from './helpers';
import analyze from './analyze';
import { getInput, setFailed } from '@actions/core';

const configProperties = [
  'use-yarn',
  'repo-token',
];

async function main() {
  try {
    await analyze(convertConfig(config));
  } catch (e) {
    setFailed(e.message);
  }
}

export default main;
