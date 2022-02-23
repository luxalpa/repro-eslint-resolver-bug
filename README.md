# repro-eslint-resolver-bug
Repro for bug involving eslint-import-resolver-typescript

running `yarn eslint src/main.ts` in here does not throw errors for NodeJS > 14.2, but it does throw an error for NodeJS version 12 and 13.
