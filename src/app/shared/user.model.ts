export interface User {
  id?: string;
  name: string;
  email: string;
  password: string | undefined;
  passwordConfirm?: string | undefined;
  passwordChangedAt?: any;
  passwordResetToken?: any;
  passwordResetExpires?: any;
  active?: boolean;
}
