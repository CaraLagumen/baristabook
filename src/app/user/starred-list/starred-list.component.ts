import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";

import { UserService } from "../user.service";
import { AlertService } from "src/app/components/alert/alert.service";
import { Drink } from "src/app/shared/drink.model";
import { Starred } from 'src/app/shared/starred.model';

@Component({
  selector: "app-starred",
  templateUrl: "./starred-list.component.html",
  styleUrls: ["./starred-list.component.scss"]
})
export class StarredListComponent implements OnInit {
  starredsDrinks$: Observable<Drink[]>;
  starreds: Starred[];

  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //EXPOSE STARRED FOR DISPLAY
    this.starredsDrinks$ = this.userService
      .getStarredDrinks()
      .pipe(delay(150))
      .pipe(map((starred: any) => starred.doc));

    this.userService.getStarred().subscribe((starred: any) => {
      this.starreds = starred.doc;

      if (this.starreds.length === 0) {
        this.alertService.warn("You don't have any saved drinks yet.", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      }
    });
  }

  onSort() {
    this.starredsDrinks$ = this.userService.getStarredDrinks().pipe(
      map((starred: any) => {
        starred.doc.sort((star1, star2) => {
          //MANUAL SORT
          return star1.name < star2.name ? -1 : 1;
        });
        return starred.doc;
      })
    );
  }
}
