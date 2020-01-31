export interface AuthData {
   name?: string;
   email: string;
   password: string;
   passwordConfirm?: string;
}

export interface AuthUpdateData {
   passwordCurrent: string;
   password: string;
   passwordConfirm: string;
}
