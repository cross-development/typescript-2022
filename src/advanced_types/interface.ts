{
  interface IUser {
    name: string;
    age: number;
    skills: string[];
    log: (id: number) => string;
  }

  interface IRole {
    roleId: number;
  }

  interface UserWIthRole extends IUser, IRole {
    createAt: Date;
  }

  const user: UserWIthRole = {
    name: "asd",
    age: 33,
    skills: ["1", "2"],
    roleId: 1,
    createAt: new Date(),
    log(id) {
      return "";
    },
  };

  interface UserDic {
    [index: number]: IUser;
  }

  type UserDic2 = {
    [index: number]: IUser;
  };
}
