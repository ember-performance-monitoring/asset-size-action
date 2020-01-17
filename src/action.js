import { convertConfig } from './helpers';
import analyze from './analyze';
import { getInput, setFailed } from '@actions/core';

export default async function main() {
  try {
    await analyze(convertConfig([
  'use-yarn',
  'repo-token',
]));
  } catch (e) {
    setFailed(e.message);
  }
}

