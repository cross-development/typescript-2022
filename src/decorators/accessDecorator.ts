{
  interface IUserService {
    users: number;
    getUsersInDatabase(): number;
  }

  class UserService implements IUserService {
    private _users: number;

    @Log()
    set users(num: number) {
      this._users = num;
    }

    get users() {
      return this._users;
    }

    getUsersInDatabase(): number {
      throw new Error('Error');
    }
  }

  function Log() {
    return (
      target: Object,
      _: string | symbol,
      descriptor: PropertyDescriptor,
    ) => {
      const set = descriptor.set;

      descriptor.set = (...args: any) => {
        console.log('args', args); // [ 1 ]
        set?.apply(target, args);
      };
    };
  }

  const userService = new UserService();
  userService.users = 1;
  console.log('userService.users', userService.users); // 1
}
