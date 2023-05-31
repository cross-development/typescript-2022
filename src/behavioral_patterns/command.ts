{
  class User {
    constructor(public userId: number) {}
  }

  class CommandHistory {
    public commands: Command[] = [];

    public push(command: Command) {
      this.commands.push(command);
    }

    public remove(command: Command) {
      this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
  }

  abstract class Command {
    public commandId: number;

    constructor(public history: CommandHistory) {
      this.commandId = Math.random();
    }

    abstract execute(): void;
  }

  class AddUserCommand extends Command {
    constructor(private user: User, private receiver: UserService, public history: CommandHistory) {
      super(history);
    }

    public execute(): void {
      this.receiver.saveUser(this.user);
      this.history.push(this);
    }

    public undo(): void {
      this.receiver.deleteUser(this.user.userId);
      this.history.remove(this);
    }
  }

  class UserService {
    public saveUser(user: User) {
      console.log(`Save user with id: ${user.userId}`);
    }

    public deleteUser(userId: number) {
      console.log(`Delete user with id: ${userId}`);
    }
  }

  class Controller {
    public receiver: UserService;
    public history: CommandHistory = new CommandHistory();

    public addReceiver(receiver: UserService) {
      this.receiver = receiver;
    }

    public run() {
      const addUserCommand = new AddUserCommand(new User(1), this.receiver, this.history);

      addUserCommand.execute();

      console.log(addUserCommand.history);

      addUserCommand.undo();

      console.log(addUserCommand.history);
    }
  }

  const controller = new Controller();

  controller.addReceiver(new UserService());
  controller.run();
}
