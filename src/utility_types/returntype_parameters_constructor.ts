{
  class User {
    constructor(public id: number, public name: string) {}
  }

  function getData(id: number): User {
    return new User(id, 'Vasia');
  }

  type RT = ReturnType<typeof getData>; // return User
  type RT2 = ReturnType<() => void>; // return void
  type RT3 = ReturnType<<T>() => T>; // return unknown
  type RT4 = ReturnType<<T extends string>() => T>; // return string

  type PT = Parameters<typeof getData>; // return [id: number]

  type CP = ConstructorParameters<typeof User>; // return [id: number, name: string]
}
