import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent, ResetComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule]
})
export class AuthModule {}
