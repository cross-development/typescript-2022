{
  class User {
    _login: string;
    password: string;

    // getLogin(l: string) {
    //   this.login = "user-" + l;
    // }

    // returns type from get method
    set login(l: string) {
      this._login = "user-" + l;
    }

    get login() {
      return "no_login";
    }

    async setPassword(p: string) {
      // await ...
    }

    // set password(p: string) {
    //   only sync
    // }
  }

  const user = new User();
  //   user.login = "user-";

  user.login = "myLogin"; // User {_login: "user-myLogin"}
  user.login; // "no_login"
}
