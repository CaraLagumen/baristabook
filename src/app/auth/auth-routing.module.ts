import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'signup', component: SignupComponent }
];

@NgModule({
   imports: [CommonModule, RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AuthRoutingModule {}
