{
  const n: null = null;
  // const n: null = undefined  // error
  const n1: any = null;
  // const n2: number = null; // error
  // const n3: string = null; // error
  // const n4: boolean = null; // error
  // const n5: undefined = null; // error

  interface User {
    name: string;
  }

  function getUser() {
    if (Math.random() > 0.5) {
      return null;
    } else {
      return {
        name: "Vasia",
      } as User;
    }
  }

  const user = getUser();

  if (user) {
    console.log("user.name", user.name);
  }
}
