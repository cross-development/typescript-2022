import { ChildProcessWithoutNullStreams } from 'child_process';
import { IStreamLogger } from './stream-logger.interface';

export class StreamHandler {
  constructor(private logger: IStreamLogger) {}

  public processOutput(stream: ChildProcessWithoutNullStreams): void {
    stream.stdout.on('data', (data: any) => this.logger.log(data.toString()));

    stream.stderr.on('data', (data: any) => this.logger.error(data.toString()));

    stream.on('close', () => this.logger.end());
  }
}
