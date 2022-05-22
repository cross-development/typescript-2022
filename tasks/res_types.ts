{
  // Request data
  interface IPayment {
    sum: number;
    from: number;
    to: number;
  }

  interface IPaymentRequest extends IPayment {}

  // Response data
  enum PaymentStatus {
    SUCCESS = "success",
    FAILED = "failed",
  }

  interface ISuccessData extends IPayment {
    databaseId: number;
  }

  interface IResponseSuccess {
    status: PaymentStatus.SUCCESS;
    data: ISuccessData;
  }

  interface IFailedData {
    errorMessage: string;
    errorCode: number;
  }

  interface IResponseFailed {
    status: PaymentStatus.FAILED;
    data: IFailedData;
  }

  //   const get = (): IResponseSuccess | IResponseFailed => {};
}
