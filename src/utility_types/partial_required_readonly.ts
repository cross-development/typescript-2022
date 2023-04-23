{
  interface User {
    name: string;
    age?: number;
    email: string;
  }

  type PartialType = Partial<User>;
  const p: PartialType = {}; // when we use partial type the empty object is also valid.

  type RequiredType = Required<User>;
  type ReadOnlyType = Readonly<User>;
  type RequiredAndReadonly = Required<Readonly<User>>;
}
