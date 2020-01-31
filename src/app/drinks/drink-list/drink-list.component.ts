import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { DrinksService } from '../drinks.service';
import { Drink } from '../../shared/drink.model';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/user/user.service';

@Component({
   selector: 'app-drink-list',
   templateUrl: './drink-list.component.html',
   styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit, OnDestroy {
   private authListenerSub: Subscription;

   drinks$: Observable<Drink[]>;
   userIsAuth: boolean;
   userId: string;
   starreds: any[];

   isLoading = false;

   constructor(
      private drinksService: DrinksService,
      private authService: AuthService,
      private userService: UserService
   ) {}

   ngOnInit() {
      this.isLoading = true;

      this.userFeature();

      //EXPOSE DRINK FOR DISPLAY WITH MINISCULE DELAY
      //TO REGISTER STARRED DRINKS IF ANY
      //REGULAR MODE
      this.drinks$ = this.drinksService
         .getDrinks()
         .pipe(delay(150))
         .pipe(map((drinks: any) => drinks.doc));

      this.isLoading = false;
   }

   onSort() {
      this.drinks$ = this.drinksService
         .getDrinksSorted()
         .pipe(map((drinks: any) => drinks.doc));
   }

   userFeature() {
      //CHECK IF USER LOGGED IN & SHARE TO CHILD WITH LISTENER
      this.userIsAuth = this.authService.getIsAuth();
      this.authListenerSub = this.authService
         .getAuthStatusListener()
         .subscribe(isAuth => (this.userIsAuth = isAuth));

      if (this.userIsAuth) {
         //IF USER LOGGED IN, EXPOSE STARRED ARR TO COMPARE FOR DISPLAY IN CHILD
         this.userId = this.authService.getUserId();

         this.userService.getStarred().subscribe((starred: any) => {
            this.starreds = starred.doc;
         });
      } else if (!this.userIsAuth) {
         //IF NOT, SET UNUSED VARS TO NULL
         this.userId = null;
         this.starreds = [];
      }
   }

   ngOnDestroy() {
      this.authListenerSub.unsubscribe();
   }
}
