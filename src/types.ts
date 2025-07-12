export type TFormField = {value: string | null; isValid: boolean};
export type TFormData = {
  name: TFormField;
  surname: TFormField;
  email: TFormField;
  password: TFormField;
  repeatPassword: TFormField;
};
