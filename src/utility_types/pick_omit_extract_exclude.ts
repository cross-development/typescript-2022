{
  interface PaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
  }

  // allows us to omit specific props from any type
  type Payment = Omit<PaymentPersistent, 'id'>;

  // allows us to pick specific props from any type
  type PaymentRequisites = Pick<PaymentPersistent, 'from' | 'to'>;

  // allows us to extract a specific type from the union type passed as the first argument
  type ExtractEx = Extract<'from' | 'to' | Payment, string>;

  // allows us to exclude a specific type from the union type passed as the first argument
  type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;
}
