{
  class User {
    name: string = "user";

    constructor() {
      console.log("this.name", this.name);
    }
  }

  class Admin extends User {
    name: string = "admin";

    constructor() {
      super();

      console.log("this.name", this.name); // invoke with this only after super()
    }
  }

  new Admin(); // "user", "admin"

  /**
   * 1. name = "user" inside User
   * 2. constructor() inside User
   * 3. name = "admin" inside Admin
   * 4. constructor() inside Admin
   */

  class HttpError extends Error {
    code: number;

    constructor(message: string, code?: number) {
      super(message);
      this.code = code ?? 500;
    }
  }
}
