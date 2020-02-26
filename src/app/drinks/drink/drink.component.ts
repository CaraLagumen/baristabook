import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, delay } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";

import { Drink } from "../../shared/drink.model";
import { DrinksService } from "../drinks.service";
import { AuthService } from "src/app/auth/auth.service";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-drink",
  templateUrl: "./drink.component.html",
  styleUrls: ["./drink.component.scss"]
})
export class DrinkComponent implements OnInit, OnDestroy {
  private authListenerSub: Subscription;

  drink$: Observable<Drink>;
  drinkId: string;
  userIsAuth: boolean;
  userId: any;
  starreds: any[];

  //STARRED FEATURE
  drinkIsStarred = false;
  star = "★";

  constructor(
    private drinksService: DrinksService,
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //FETCH ID FROM ROUTE PARAM
    this.drinkId = this.route.snapshot.paramMap.get("id");

    //EXPOSE DRINK FOR DISPLAY WITH POSSIBLE KEYS
    this.drink$ = this.drinksService
      .getDrink(this.drinkId)
      .pipe(map((drink: any) => drink.doc));

    this.userFeatureWithStarred();
  }

  onSaveStarred() {
    //SERVER REQUIRES THE DRINK ID & USER ID FOR STARRED CREATION
    this.userService.saveStarred(this.drinkId, this.userId).subscribe(() => {
      //UPDATE VALUES & starreds ARR
      this.drinkIsStarred = true;
      this.star = "☆";

      this.updateStarred();
    });
  }

  onDeleteStarred() {
    //PLUG IN STARRED ARR & DRINK ID FOR COMPARISON IN DELETE SERVICE
    this.userService
      .deleteStarred(this.starreds, this.drinkId)
      .subscribe(() => {
        //UPDATE VALUES & STARRED ARR
        this.drinkIsStarred = false;
        this.star = "★";

        this.updateStarred();
      });
  }

  userFeatureWithStarred() {
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

        //VARIANT FROM drink-list USER FEATURE
        //FIND IF DRINK IS STARRED, TOGGLE drinkIsStarred BUTTON
        this.starreds.forEach(el => {
          if (el.drink.id === this.drinkId) {
            this.drinkIsStarred = true;
            this.star = "☆";
          }
        });
      });
    } else if (!this.userIsAuth) {
      //IF NOT, SET UNUSED VARS TO NULL
      this.userId = null;
      this.starreds = [];
    }
  }

  //ENABLES TOGGLE BUTTON
  clickHandler() {
    if (this.drinkIsStarred) {
      this.onDeleteStarred();
    } else if (!this.drinkIsStarred) {
      this.onSaveStarred();
    }
  }

  //UPDATE STARRED DATA FOR DISPLAY
  updateStarred() {
    this.userService.getStarred().subscribe((starred: any) => {
      this.starreds = starred.doc;
    });
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }
}
