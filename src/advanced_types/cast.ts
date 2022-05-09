{
  let a = 5;
  let b: string = a.toString();

  let c = "qwe";
  let d: number = parseInt(c);

  //   let e: string = new String(a); // error
  let e: string = new String(a).valueOf();

  //   let f: boolean = new Boolean(a); // error
  let f: boolean = new Boolean(a).valueOf();

  interface User {
    name: string;
    email: string;
    login: string;
  }

  const user: User = {
    name: "John",
    email: "john@mail.com",
    login: "john",
  };

  // const user = <User> {} === const user = {} as User

  interface Admin {
    name: string;
    role: number;
  }

  // incorrect, admin has additional fields (email and login)
  const admin: Admin = {
    ...user,
    role: 1,
  };

  // Map fn
  function userToAdmin(user: User): Admin {
    return {
      name: user.name,
      role: 1,
    };
  }
}
