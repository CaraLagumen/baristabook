import { Document } from "mongoose";

interface IUser extends Document {
  id?: string;
  name: string;
  email: string;
  password: string | undefined;
  passwordConfirm?: string | undefined;
  passwordChangedAt?: any;
  passwordResetToken?: any;
  passwordResetExpires?: any;
  active?: boolean;

  correctPassword(password: string, passwordConfirm: string): Promise<boolean>;
  changedPasswordAfter(JWTTimestamp: number): Promise<boolean>;
  createPasswordResetToken(): string;
}

export default IUser;
