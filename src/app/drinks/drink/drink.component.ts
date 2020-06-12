import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

import { Drink } from "../../shared/drink.model";
import { Starred } from "../../shared/starred.model";
import { UserService } from "../../user/user.service";

@Component({
  selector: "app-drink",
  templateUrl: "./drink.component.html",
  styleUrls: ["./drink.component.scss", "../../shared/drink-card.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkComponent implements OnInit {
  @Input() drink: Drink;
  @Input() userIsAuth: boolean;
  @Input() userId: string;
  @Input() starreds: Starred[];

  //STARRED FEATURE
  drinkIsStarred = false;
  star = "★";

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (this.userIsAuth) {
      //FIND IF DRINK IS STARRED, TOGGLE drinkIsStarred BUTTON
      this.starreds.forEach(el => {
        if ((el.drink as Drink).id === this.drink.id) {
          this.drinkIsStarred = true;
        }
      });
    }
  }

  onSaveStarred() {
    //SERVER REQUIRES THE DRINK ID & USER ID FOR STARRED CREATION
    this.userService.saveStarred(this.drink.id, this.userId).subscribe(() => {
      //UPDATE VALUES & starreds ARR
      this.drinkIsStarred = true;

      this.updateStarred();
    });
  }

  onDeleteStarred() {
    //PLUG IN STARRED ARR & DRINK ID FOR COMPARISON IN DELETE SERVICE
    this.userService
      .deleteStarred(this.starreds, this.drink.id)
      .subscribe(() => {
        //UPDATE VALUES & STARRED ARR
        this.drinkIsStarred = false;

        this.updateStarred();
      });
  }

  //UPDATE STARRED DATA FOR DISPLAY
  updateStarred() {
    this.userService.getStarred().subscribe((starred: any) => {
      this.starreds = starred.doc;

      this.cd.markForCheck();
    });
  }

  clickHandler() {
    this.drinkIsStarred ? this.onDeleteStarred() : this.onSaveStarred();
  }

  hoverHandler(type: `action` | `reset`) {
    type === `action` && this.drinkIsStarred
      ? (this.star = "☆")
      : (this.star = "★");
  }
}
