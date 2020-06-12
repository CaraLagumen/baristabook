import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/user.model';

@Component({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   updateUserForm: FormGroup;
   user: User;

   isLoading = false;

   constructor(
      private userService: UserService,
      private authService: AuthService
   ) {}

   ngOnInit() {
      this.isLoading = true;

      //INITIALIZE USER INFO FORM
      this.updateUserForm = new FormGroup({
         name: new FormControl(null, {
            validators: [Validators.minLength(1), Validators.maxLength(20)]
         }),
         email: new FormControl(null, {
            validators: [Validators.email]
         }),
         location: new FormControl(null, {
            validators: [Validators.minLength(1), Validators.maxLength(40)]
         })
      });

      //EXPOSE USER DATA FOR DISPLAY & PLUG IN VALUES FOR FORM
      this.userService.getUser().subscribe(userData => {
         this.user = userData.doc;

         this.updateUserForm.controls['name'].setValue(userData.name);
         this.updateUserForm.controls['email'].setValue(userData.email);
         this.updateUserForm.controls['location'].setValue(userData.location);
      });

      this.isLoading = false;
   }

   onUpdateUser() {
      if (this.updateUserForm.invalid) {
         return;
      }

      this.isLoading = true;

      this.userService.updateUser(
         this.updateUserForm.value.name,
         this.updateUserForm.value.email,
         this.updateUserForm.value.location
      );

      this.updateUserForm.reset();

      this.isLoading = false;
   }

   onChangePassword(form: NgForm) {
      if (form.invalid) {
         return;
      }

      this.isLoading = true;

      this.authService.changePassword(
         form.value.passwordCurrent,
         form.value.password,
         form.value.passwordConfirm
      );

      this.updateUserForm.reset();

      this.isLoading = false;
   }
}
