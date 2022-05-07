{
  interface IUser {
    login: string;
    password?: string;
  }

  // OK
  const user: IUser = {
    login: "qwe",
    // password: "1",
  };

  type TUser = {
    login: string;
    password?: string;
  };

  // OK
  const user2: TUser = {
    login: "qwe",
    // password: "1",
  };

  const multiply1 = (first: number, second?: number): number => {
    return !second ? first * first : first * second;
  };

  const multiply2 = (first: number, second: number = 5): number => {
    return first * second;
  };

  interface UserPro {
    login: string;
    password?: {
      type: "primary" | "secondary";
    };
  }

  const testPass = (user: UserPro) => {
    const t = user.password?.type; // optional chaining
  };

  const test = (param?: string) => {
    const t = param ?? multiply1(5); // nullish coalescing
  };
}
