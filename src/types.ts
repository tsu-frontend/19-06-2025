export type TFormField = {value: string | null; isValid: boolean};
export type TFormData = {
  firstName: TFormField;
  lastName: TFormField;
  email: TFormField;
  password: TFormField;
  repeatPassword: TFormField;
};








type TAvatar = string | undefined
interface IUserResponse {
  createdAt: string;
  emailVerified: boolean;
  updatedAt: string;
  id: string;

  firstName: string;
  lastName: string;
  avatar: TAvatar;
  email: string
}
type TSignUpData = {
  avatar:  TAvatar;
  name: string;
  surname: string;
  email: string;
  password: string;
};
type TSingInData = {
  email: string;
  password: string;
};

// avatar
// first name
// last name
// email

interface IUser {
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
}
