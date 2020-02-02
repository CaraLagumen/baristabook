import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';
import {
   map,
   delay,
   debounceTime,
   distinctUntilChanged,
   filter
} from 'rxjs/operators';

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
   searching: boolean;

   isLoading = false;
   searchTerm = new Subject<string>();
   searchResults: any;

   constructor(
      private drinksService: DrinksService,
      private authService: AuthService,
      private userService: UserService
   ) {
      //REAL-TIME SEARCH FEATURE
      this.searchTerm
         .pipe(
            //EXTRACT TYPED INPUT
            map((typed: any) => typed.target.value),
            //DELAY API CALL FOR 400MS
            debounceTime(400),
            //RESTRICT TYPING ERR FROM GETTING SENT
            distinctUntilChanged(),
            //REQUIRE SEARCH TERM TO BE MORE THAN 1 LETTER
            filter(term => term.length > 0)
         )
         .subscribe(searchTerm => {
            this.searching = true;

            //FETCH THE RESULTS
            this.drinksService
               .searchDrinks(searchTerm)
               .pipe(
                  map((res: any) => {
                     this.searchResults = res.doc;
                  })
               )
               //UPDATE UI
               .subscribe(searchTerm => {
                  this.searching = true;

                  this.onSearch(searchTerm);
               });
         });
   }

   ngOnInit() {
      this.isLoading = true;

      this.userFeature();

      //EXPOSE DRINK FOR DISPLAY WITH MINISCULE DELAY
      //TO REGISTER STARRED DRINKS IF ANY
      this.drinks$ = this.drinksService
         .getDrinks()
         .pipe(delay(150))
         .pipe(map((drinks: any) => drinks.doc));

      this.isLoading = false;
   }

   onSort() {
      this.userFeature();

      this.drinks$ = this.drinksService
         .getDrinksSorted()
         .pipe(delay(150))
         .pipe(map((drinks: any) => drinks.doc));
   }

   onSearch(term) {
      this.drinksService.searchDrinks(term).subscribe(
         res => {
            this.searching = false;
         },
         err => {
            this.searching = false;
         }
      );
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
