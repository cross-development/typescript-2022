// Namespaces

// We can put inside namespaces everything
export namespace A {
  export const a = 5;

  export interface B {
    c: number;
  }
}

export default {};

{
  // References
  /// <reference path="./module.app2.ts" />
}
