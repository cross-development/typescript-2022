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

  type Res = IResponseSuccess | IResponseFailed;
  type f = (res: Res) => number;

  function isSuccess(res: Res): res is IResponseSuccess {
    return res.status === PaymentStatus.SUCCESS ? true : false;
  }

  function getIdFromData(res: Res): number {
    if (isSuccess(res)) {
      return res.data.databaseId;
    } else {
      throw new Error(res.data.errorMessage);
    }
  }
}
