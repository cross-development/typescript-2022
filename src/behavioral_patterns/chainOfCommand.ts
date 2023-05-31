{
  interface IMiddleware {
    handle(req: any): any;
    next(mid: IMiddleware): IMiddleware;
  }

  abstract class AbstractMiddleware implements IMiddleware {
    private nextMiddleware: IMiddleware;

    public handle(req: any) {
      if (this.nextMiddleware) {
        return this.nextMiddleware.handle(req);
      }
    }

    public next(mid: IMiddleware): IMiddleware {
      this.nextMiddleware = mid;
      return mid;
    }
  }

  class AuthMiddleware extends AbstractMiddleware {
    public override handle(req: any) {
      console.log('AuthMiddleware');

      if (req.userId === 1) {
        return super.handle(req);
      }

      return { error: 'Sorry, but you do not have any permissions!' };
    }
  }

  class ValidateMiddleware extends AbstractMiddleware {
    public override handle(req: any) {
      console.log('ValidateMiddleware');

      if (req.body) {
        return super.handle(req);
      }

      return { error: 'Request body was not provided!' };
    }
  }

  class Controller extends AbstractMiddleware {
    public override handle(req: any) {
      console.log('AuthMiddlewControllerare');

      return { success: req };
    }
  }

  const controller = new Controller();
  const validate = new ValidateMiddleware();
  const auth = new AuthMiddleware();

  auth.next(validate).next(controller);

  console.log(auth.handle({ userId: 3 })); // Error = Sorry, but you do not have any permissions!
  console.log(auth.handle({ userId: 1 })); // Error = Request body was not provided!
  console.log(auth.handle({ userId: 1, body: 'Ok' })); // Success
}
