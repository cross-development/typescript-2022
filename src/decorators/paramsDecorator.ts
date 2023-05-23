{
  interface IUserService {
    users: number;
    getUsersInDatabase(): number;
    setUsersInDatabase(num: number): void;
  }

  class UserService implements IUserService {
    users: number;

    getUsersInDatabase(): number {
      return this.users;
    }

    setUsersInDatabase(@Positive() num: number): void {
      this.users = num;
    }
  }

  function Positive() {
    return (
      target: Object,
      propertyKey: string | symbol,
      paramIndex: number,
    ) => {
      console.log('target', target); // {}
      console.log('propertyKey', propertyKey); // setUsersInDatabase
      console.log('paramIndex', paramIndex); // 0 - param position
    };
  }

  const userService = new UserService();
  userService.users = 1;
  console.log('userService.users', userService.users); // 1
}
