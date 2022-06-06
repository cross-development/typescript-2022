{
  interface IData {
    group: number;
    name: string;
  }

  const data: IData[] = [
    { group: 1, name: "a" },
    { group: 1, name: "b" },
    { group: 2, name: "c" },
  ];

  interface IGroup<T> {
    [key: string]: T[];
  }

  type key = string | number | symbol;

  const group = <T extends Record<key, any>>(
    array: T[],
    key: keyof T
  ): IGroup<T> => {
    return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
      const itemKey = item[key];
      let currentEl = map[itemKey];

      Array.isArray(currentEl) ? currentEl.push(item) : (currentEl = [item]);

      map[itemKey] = currentEl;

      return map;
    }, {});
  };

  const res = group<IData>(data, "group");
}
