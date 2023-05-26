{
  class Notify {
    send(template: string, to: string) {
      console.log('template', template);
      console.log('to', to);
    }
  }

  class Log {
    log(message: string) {
      console.log('message', message);
    }
  }

  class Template {
    private templates = [{ name: 'other', template: '<h1>Template!</h1>' }];

    getByName(name: string) {
      return this.templates.find(t => t.name === name);
    }
  }

  class NotificationFacade {
    private logger: Log;
    private notify: Notify;
    private template: Template;

    constructor() {
      this.logger = new Log();
      this.notify = new Notify();
      this.template = new Template();
    }

    send(to: string, templateName: string) {
      const data = this.template.getByName(templateName);

      if (!data) {
        return this.logger.log('Not found');
      }

      this.notify.send(data.template, to);
      this.logger.log('Template has been sent');
    }
  }

  const service = new NotificationFacade();
  service.send('test@test.ua', 'other');
}
