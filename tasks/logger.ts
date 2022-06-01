{
  abstract class Logger {
    abstract log(message: string): void;

    printDate(date: Date): void {
      this.log(date.toString());
    }
  }

  class DateLogger extends Logger {
    log(message: string): void {
      console.log("message", message);
    }

    logWithDate(message: string): void {
      this.printDate(new Date());
      this.log(message);
    }
  }

  const dateLogger = new DateLogger();
  dateLogger.logWithDate("My new message");
}
