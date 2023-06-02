import { IStreamLogger } from '../../core/handlers/stream-logger.interface';

export class ConsoleLogger implements IStreamLogger {
  private static logger: ConsoleLogger;

  public static getInstance(): ConsoleLogger {
    if (!ConsoleLogger.logger) {
      ConsoleLogger.logger = new ConsoleLogger();
    }

    return ConsoleLogger.logger;
  }

  public end(): void {
    console.log('Done');
  }

  public log(...args: any[]): void {
    console.log(...args);
  }

  public error(...args: any[]): void {
    console.log(...args);
  }
}
