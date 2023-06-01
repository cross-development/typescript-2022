{
  class Form {
    constructor(public name: string) {}
  }

  abstract class SaveForm<T> {
    protected abstract fill(form: Form): T;

    protected abstract send(data: T): void;

    public save(form: Form) {
      const res = this.fill(form);

      this.log(res);

      this.send(res);
    }

    protected log(data: T): void {
      console.log('data', data);
    }
  }

  class FirstAPI extends SaveForm<string> {
    protected fill(form: Form): string {
      return form.name;
    }

    protected send(data: string): void {
      console.log('Send data', data);
    }
  }

  class SecondAPI extends SaveForm<{ fio: string }> {
    protected fill(form: Form): { fio: string } {
      return { fio: form.name };
    }

    protected send(data: { fio: string }): void {
      console.log('Send data', data);
    }
  }

  const form1 = new FirstAPI();
  form1.save(new Form('Vasia'));

  const form2 = new SecondAPI();
  form2.save(new Form('Kolia'));
}
