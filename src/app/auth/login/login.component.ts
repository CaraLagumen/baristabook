import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
   private authStatusSub: Subscription;

   isLoading = false;

   constructor(public authService: AuthService) {}

   ngOnInit() {
      this.authStatusSub = this.authService
         .getAuthStatusListener()
         .subscribe(authStatus => (this.isLoading = false));
   }

   onLogin(form: NgForm) {
      if (form.invalid) {
         return;
      }

      this.isLoading = true;
      this.authService.login(form.value.email, form.value.password);
   }

   ngOnDestroy() {
      this.authStatusSub.unsubscribe();
   }
}
