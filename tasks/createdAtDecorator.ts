{
  interface IUserService {
    users: number;
    getUsersInDatabase(): number;
  }

  @CreatedAt
  class UserService implements IUserService {
    users: number;

    getUsersInDatabase(): number {
      return this.users;
    }
  }

  type CreatedAt = {
    createdAt: Date;
  };

  function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      createdAt = new Date();
    };
  }

  console.log((new UserService() as IUserService & CreatedAt).createdAt);
}
