{
  class Payment {
    private date: Date = new Date();

    getDate(this: Payment) {
      return this.date;
    }

    getDateArrow = () => {
      return this.date;
    };
  }

  const p = new Payment();
  p.getDate();

  const user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow,
  };

  user.paymentDate(); // undefined without bind
  user.paymentDateArrow(); // OK

  class PaymentPersistent extends Payment {
    save() {
      return super.getDate();
    }

    saveArrow() {
      //   return super.getDateArrow(); // Error
      return this.getDateArrow(); // OK
    }
  }

  const pp = new PaymentPersistent();
  pp.save(); // OK
  pp.saveArrow(); // Error with using super.getDateArrow()
  pp.saveArrow(); // OK with using this.getDateArrow()
}
