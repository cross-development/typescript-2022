import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommandExecutor } from '../../core/executor/command.executor';
import { ICommandExecutor } from '../../core/executor/command.types';
import { IStreamLogger } from '../../core/handlers/stream-logger.interface';
import { PromptService } from '../../core/prompt/prompt.service';
import { IDirInput } from './dir.types';
import { DirBuilder } from './dir.builder';
import { StreamHandler } from '../../core/handlers/stream.handler';

export class DirExecutor extends CommandExecutor<IDirInput> {
  private promptService: PromptService = new PromptService();

  constructor(logger: IStreamLogger) {
    super(logger);
  }

  protected async prompt(): Promise<IDirInput> {
    const path = await this.promptService.input<string>('Path', 'input');

    return { path };
  }

  protected build({ path }: IDirInput): ICommandExecutor {
    const args = new DirBuilder().detailedOutput().output();

    return { command: 'ls', args: args.concat(path) };
  }

  protected spawn({ command, args }: ICommandExecutor): ChildProcessWithoutNullStreams {
    return spawn(command, args);
  }

  protected processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void {
    const handler = new StreamHandler(logger);
    handler.processOutput(stream);
  }
}
