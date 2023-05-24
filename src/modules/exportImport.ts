// Exports
export const a = 5;

export interface B {
  c: number;
}

export class Test {}

export type MyType = number;

export default function run() {
  console.log('run');
}

// We can't use export default some type or interface
// export default type MyType2 = string;

// We can't use export default twice in one file.
// export default class {}

// Imports
import run1, { A } from './namespacesAndReference';
import running from './namespacesAndReference';
import * as all from './namespacesAndReference';
import { A as NameA } from './namespacesAndReference';
// import { type MyType3 } from './backendModules';
