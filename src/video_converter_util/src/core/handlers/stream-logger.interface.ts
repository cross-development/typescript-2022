export interface IStreamLogger {
  end(): void;
  log(...args: any[]): void;
  error(...args: any[]): void;
}
