{
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

  interface Admin {
    name: string;
    role: number;
  }

  function logId(id: string | number) {
    if (isString(id)) {
      console.log("id", id);
    } else {
      console.log("id", id);
    }
  }

  function isString(x: string | number): x is string {
    return typeof x === "string";
  }

  function isAdmin(user: User | Admin): user is Admin {
    return "role" in user;
  }

  function isAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
  }

  function setRole(user: User | Admin) {
    if (isAdmin(user)) {
      user.role = 0;
    } else {
      throw new Error("User is not an admin");
    }
  }
}
