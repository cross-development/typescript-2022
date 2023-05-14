{
  interface IUserService {
    users: number;
    getUsersInDatabase(): number;
  }

  class UserService implements IUserService {
    users: number = 1000;

    @Log(1)
    // @Log
    getUsersInDatabase(): number {
      throw new Error('Error');
    }
  }

  // Factory decorator
  function Log(arg: any) {
    console.log('Log init');
    console.log('arg', arg);

    return (
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
      // Entire override
      descriptor.value = () => {
        console.log('new value');
      };
    };
  }
  // function Log(
  //   target: Object,
  //   propertyKey: string | symbol,
  //   descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
  // ): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  //   const oldValue = descriptor.value;

  //   // Partial override
  //   descriptor.value = () => {
  //     console.log('new value');

  //     oldValue && oldValue();
  //   };

  //   // Entire override
  //   // descriptor.value = () => {
  //   //   console.log('no error');
  //   // };
  // }

  console.log(new UserService().getUsersInDatabase());
}
