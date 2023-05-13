{
  interface IUserService {
    users: number;
    getUsersInDatabase(): number;
  }

  class UserService implements IUserService {
    users: number = 1000;

    getUsersInDatabase(): number {
      return this.users;
    }
  }

  function nullUser(obj: IUserService) {
    obj.users = 0;

    return obj;
  }

  function logUsers(obj: IUserService) {
    console.log('Users:', obj.users);
    return obj;
  }

  // 1. without decorators - 1000
  console.log(new UserService().getUsersInDatabase());
  // 1. nullUser - 0
  console.log(nullUser(new UserService()).getUsersInDatabase());
  // 1. nullUser - 0,
  // 2. logUsers - 0
  console.log(logUsers(nullUser(new UserService())).getUsersInDatabase());
  // 1. logUsers - 1000
  // 2. nullUser - 0
  console.log(nullUser(logUsers(new UserService())).getUsersInDatabase());
  // calls from the near decorator to the far decorator
}
