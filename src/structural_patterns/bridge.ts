{
  interface IProvider {
    sendMessage(message: string): void;
    connect(config: unknown): void;
    disconnect(): void;
  }

  class TelegramProvider implements IProvider {
    sendMessage(message: string): void {
      console.log('message', message);
    }

    connect(config: string): void {
      console.log('config', config);
    }

    disconnect(): void {
      console.log('Disconnected TG');
    }
  }

  class WhatsUpProvider implements IProvider {
    sendMessage(message: string): void {
      console.log('message', message);
    }

    connect(config: string): void {
      console.log('config', config);
    }

    disconnect(): void {
      console.log('Disconnected WU');
    }
  }

  class NotificationSender {
    constructor(private provider: IProvider) {}

    send() {
      this.provider.connect('connect');
      this.provider.sendMessage('message');
      this.provider.disconnect();
    }
  }

  class DelayedNotificationSender extends NotificationSender {
    constructor(provider: IProvider) {
      super(provider);
    }

    sendDelayed() {}
  }

  const senderTg = new NotificationSender(new TelegramProvider());
  senderTg.send();

  const senderWu = new NotificationSender(new WhatsUpProvider());
  senderWu.send();
}
