{
  enum PaymentStatus {
    HELD,
    PROCESSED,
    REVERSED,
  }

  class Payment {
    id: number;
    createdAt: Date = new Date();
    updatedAt: Date;
    status: PaymentStatus = PaymentStatus.HELD;

    constructor(id: number) {
      this.id = id;
    }

    getPaymentLifeTime(): number {
      return new Date().getTime() - this.createdAt.getTime();
    }

    reversePayment() {
      if (this.status === PaymentStatus.PROCESSED) {
        throw new Error("Payment can't be returned");
      }

      this.status = PaymentStatus.REVERSED;
      this.updatedAt = new Date();
    }
  }

  const payment = new Payment(1);
  payment.reversePayment();
  const time = payment.getPaymentLifeTime();
}
