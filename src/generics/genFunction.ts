{
  function logMiddleware<T>(data: T): T {
    console.log(data);

    return data;
  }

  const res = logMiddleware<number>(10); // number
  const res2 = logMiddleware({ a: 1 }); // { a: number }

  const getSplittedHalf = <T>(data: Array<T>): Array<T> => {
    const l = data.length / 2;

    return data.splice(0, l);
  };

  getSplittedHalf<number>([1, 2, 3, 4]);
}
