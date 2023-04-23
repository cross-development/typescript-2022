{
  type A = Awaited<Promise<string>>; // return string
  type A2 = Awaited<Promise<Promise<string>>>; // return string

  interface IMenu {
    name: string;
    url: string;
  }

  async function getMenu(): Promise<IMenu[]> {
    return [{ name: 'Analytics', url: 'analytics' }];
  }

  type R = Awaited<ReturnType<typeof getMenu>>;

  // new version
  async function getArray<T>(x: T): Promise<Awaited<T>[]> {
    return [await x];
  }

  // old version
  async function getArray2<T>(x: T): Promise<T[]> {
    return [await x];
  }
}
