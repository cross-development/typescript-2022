{
  const getSplittedHalf = <T>(data: Array<T>): Array<T> => {
    const l = data.length / 2;

    return data.splice(0, l);
  };

  const split: <T>(data: Array<T>) => Array<T> = getSplittedHalf;

  interface ILogLine<T> {
    timeStamp: Date;
    data: T;
  }

  type LogLineType<T> = {
    timeStamp: Date;
    data: T;
  };

  const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
      a: 1,
    },
  };
}
