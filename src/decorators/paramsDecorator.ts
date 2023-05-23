import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

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

    @Validate()
    setUsersInDatabase(@Positive() num: number): void {
      this.users = num;
    }
  }

  function Positive() {
    return (target: Object, propertyKey: string | symbol, paramIndex: number) => {
      console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
      console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
      console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));

      let existsParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];

      existsParams.push(paramIndex);

      Reflect.defineMetadata(POSITIVE_METADATA_KEY, existsParams, target, propertyKey);
    };
  }

  function Validate() {
    return (
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
    ) => {
      let method = descriptor.value;
      descriptor.value = function (...args: any) {
        let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);

        if (positiveParams) {
          for (const index of positiveParams) {
            if (args[index] < 0) {
              throw new Error('Must be higher then 0');
            }
          }
        }

        return method?.apply(this, args);
      };
    };
  }

  const userService = new UserService();
  console.log('userService', userService);
}
