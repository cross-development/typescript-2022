{
  interface IMediator {
    notify(sender: string, event: string): void;
  }

  abstract class Mediated {
    mediator: IMediator;

    setMediator(mediator: IMediator) {
      this.mediator = mediator;
    }
  }

  class Notifications {
    public send() {
      console.log('Send message!');
    }
  }

  class Log {
    public log(message: string) {
      console.log('message', message);
    }
  }

  class EventHandler extends Mediated {
    public myEvent() {
      this.mediator.notify('EventHandler', 'myEvent');
    }
  }

  class NotificationMediator implements IMediator {
    constructor(public notifications: Notifications, public logger: Log, public eventHandler: EventHandler) {}

    public notify(sender: string, event: string): void {
      switch (event) {
        case 'myEvent':
          this.notifications.send();
          this.logger.log('Sent');
          break;
      }
    }
  }

  const handler = new EventHandler();
  const logger = new Log();
  const notifications = new Notifications();

  const mediator = new NotificationMediator(notifications, logger, handler);

  handler.setMediator(mediator);
  handler.myEvent();
}
