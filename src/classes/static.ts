{
  class UserService {
    // Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'UserService'
    // static name: string = "name";

    static db: any;

    private static database: any;

    static getUser(id: number) {
      return UserService.db.findById(id);
    }

    private static async getAdmin(id: number) {
      return await UserService.db.findById(id);
    }

    constructor(id: number) {}

    create() {
      UserService.db;
    }

    static {
      // await new Promise(); // Error
      UserService.db = "db"; // will be executed immediately when the code is run
    }
  }

  UserService.db; // Static property
  // UserService.database; // Error, private property

  UserService.getUser(1); // Static method
  // UserService.getAdmin(1); // Error, private method

  const inst = new UserService(1);
  inst.create();
}
