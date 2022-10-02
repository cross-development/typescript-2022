{
  // we don't have access to this fn and the types of its arguments
  function runTransaction(transaction: { fromTo: [string, string] }) {
    console.log('transaction :>> ', transaction);
  }

  // infer - get and define type of the argument
  type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any
    ? First
    : never;

  // The object we need to pass to the lib function
  const transaction: GetFirstArg<typeof runTransaction> = {
    fromTo: ['1', '2'],
  };

  runTransaction(transaction);
}
