{
  interface IUser {
    name: string;
    age: number;
  }

  type KeysOfUser = keyof IUser;

  const key1: KeysOfUser = "name";
  const key2: KeysOfUser = "age";

  const getValue = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
  };

  const user: IUser = {
    name: "John",
    age: 30,
  };

  const userName = getValue(user, "name");
}
