import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { map, delay } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

import { Drink } from "../shared/drink.model";
import { DrinksService } from "./drinks.service";
import { AuthService } from "../auth/auth.service";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-drinks",
  templateUrl: "./drinks.component.html",
  styleUrls: ["./drinks.component.scss"]
})
export class DrinksComponent implements OnInit, OnDestroy {
  private authListenerSub: Subscription;

  drinks$: Observable<Drink[]>;
  userIsAuth: boolean;
  userId: string;
  starreds: any[];
  slug: string;

  isLoading = false;

  constructor(
    private drinksService: DrinksService,
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.userFeature();

    //FETCH SLUG FROM ROUTE PARAM
    this.slug = this.route.snapshot.paramMap.get("slug");

    this.drinks$ = this.drinksService
      .getDrinkSlug(this.slug)
      .pipe(delay(150))
      .pipe(map((drinks: any) => drinks.doc));

    this.isLoading = false;
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
      this.starreds = null;
    }
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }
}
