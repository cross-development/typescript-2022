{
  type PaymentStatus = "new" | "paid";

  class Payment {
    id: number;
    status: PaymentStatus = "new";

    constructor(id: number) {
      this.id = id;
    }

    pay() {
      this.status = "paid";
    }
  }

  class PersistedPayment extends Payment {
    databaseId: number;
    paidAt: Date;

    constructor() {
      const id = Math.random();

      super(id);
    }

    save() {
      /// save into db
    }

    // override methods
    override pay(date?: Date) {
      //   this.status = "paid"; // not good

      super.pay();

      if (date) {
        this.paidAt = date;
      }
    }
  }

  //   new PersistedPayment(); super allows to invoke class without id

  // From parent class
  //   new PersistedPayment(1).id;
  //   new PersistedPayment(1).status;
  //   new PersistedPayment(1).pay;
}
