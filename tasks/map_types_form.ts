{
  interface IForm {
    name: string;
    password: string;
  }

  const form: IForm = {
    name: 'Vasia',
    password: 'qwe',
  };

  const formValidation: Validation<IForm> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Must be longer than 5 chars' },
  };

  type Validation<T> = {
    [K in keyof T]:
      | { isValid: true }
      | { isValid: false; errorMessage: string };
  };
}
