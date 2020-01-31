import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   private authStatusSub: Subscription;

   isLoading = false;

   constructor(public authService: AuthService) {}

   ngOnInit() {
      this.authStatusSub = this.authService
         .getAuthStatusListener()
         .subscribe(authStatus => (this.isLoading = false));
   }

   onSignup(form: NgForm) {
      if (form.invalid) {
         return;
      }

      this.isLoading = true;
      
      this.authService.signup(
         form.value.name,
         form.value.email,
         form.value.password,
         form.value.passwordConfirm
      );
   }

   ngOnDestroy() {
      this.authStatusSub.unsubscribe();
   }
}
