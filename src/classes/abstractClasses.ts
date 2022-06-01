{
  abstract class Controller {
    abstract handle(req: any): void;

    handleWithLogs(req: any) {
      console.log("Start");
      this.handle(req);
      console.log("End");
    }
  }

  class UserController extends Controller {
    handle(req: any): void {
      console.log(req);
    }
  }

  //   new Controller(); // error, only extends
  new UserController(); // OK
  new UserController().handle("Request"); // OK
  new UserController().handleWithLogs("Request"); // OK
}
