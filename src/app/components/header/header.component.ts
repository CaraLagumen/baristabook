import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
   private authListenerSub: Subscription;

   userIsAuth = false;

   constructor(private authService: AuthService) {}

   ngOnInit() {
      //CHECK IF USER LOGGED IN TO TOGGLE DISPLAYED BUTTONS
      this.userIsAuth = this.authService.getIsAuth();
      this.authListenerSub = this.authService
         .getAuthStatusListener()
         .subscribe(isAuth => (this.userIsAuth = isAuth));
   }

   onLogout() {
      this.authService.logout();
   }

   ngOnDestroy() {
      this.authListenerSub.unsubscribe();
   }
}
