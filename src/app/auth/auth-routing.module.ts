import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  {
    path: "login/:state",
    component: LoginComponent,
    data: { animation: "LoginPage" }
  },
  {
    path: "signup",
    component: SignupComponent,
    data: { animation: "SignupPage" }
  },
  {
    path: "forgot/:state",
    component: ForgotComponent,
    data: { animation: "ForgotPage" }
  },
  {
    path: "reset/:token",
    component: ResetComponent,
    data: { animation: "ResetPage" }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
