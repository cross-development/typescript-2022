{
  // 1)
  interface User {
    name: string;
  }

  interface User {
    age: number;
  }

  // OK
  const user: User = {
    name: "a",
    age: 33,
  };

  //   type TUser = { // Error
  //     name: string;
  //   };

  //   type TUser = { // Error
  //     age: number;
  //   };

  // ===============================

  // 2)
  type ID = string | number; // OK

  //   interface ID = string | number; // error

  interface IDI {
    ID: number | string; // OK
  }
}
