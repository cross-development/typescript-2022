{
  interface IUserService {
    users: number;
    getUsersInDatabase(): number;
  }

  // Init from up to down
  // Run from down to up
  @setUsers(2)
  @log()
  //   @setUserAdvanced(4)
  class UserService implements IUserService {
    users: number;

    getUsersInDatabase(): number {
      return (this.users = 1000);
    }
  }

  function setUsers(users: number) {
    console.log('setUsers init 1');
    return (target: Function) => {
      console.log('setUsers run 4');
      target.prototype.users = users;
    };
  }

  function log() {
    console.log('log init 2');
    return (target: Function) => {
      console.log('log run 3');
    };
  }

  function setUserAdvanced(users: number) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        users = users;
      };
    };
  }

  console.log(new UserService().getUsersInDatabase());
}
