import { setFailed } from '@actions/core';
import convertConfig from './helpers';
import analyze from './analyze';

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
