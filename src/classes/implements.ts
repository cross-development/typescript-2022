{
  // Ex 1
  interface ILogger {
    log(...args: unknown[]): void;
    error(...args: unknown[]): void;
  }

  class Logger implements ILogger {
    log(...args: unknown[]): void {
      console.log(...args);
    }

    error(...args: unknown[]): void {
      // throw into external system
      console.log(...args);
    }
  }

  // Ex 2
  interface IPayable {
    price?: number;
    pay(paymentId: number): void;
  }

  interface IDeletable {
    delete(): void;
  }

  class User implements IPayable, IDeletable {
    price?: number | undefined;

    delete(): void {
      throw new Error("Method not implemented.");
    }

    // pay(paymentId: number): void {} // OK
    pay(paymentId: number | string): void {} // OK
  }
}
