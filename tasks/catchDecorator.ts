{
  interface IUserService {
    users: number;
    getUsersInDatabase(): number;
  }

  class UserService implements IUserService {
    users: number = 1000;

    @Catch({ rethrow: true })
    getUsersInDatabase(): number {
      throw new Error('Error');
    }
  }

  function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
    return (
      target: Object,
      _: string | symbol,
      descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
      const method = descriptor.value;

      descriptor.value = (...args: any[]) => {
        try {
          return method?.apply(target, args);
        } catch (error) {
          if (error instanceof Error) {
            console.log('Error message', error.message);

            if (rethrow) {
              throw error;
            }
          }
        }
      };
    };
  }
}
