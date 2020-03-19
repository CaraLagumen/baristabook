import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

import { Drink } from "../../shared/drink.model";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-drink",
  templateUrl: "./drink.component.html",
  styleUrls: ["./drink.component.scss", "../../shared/drink-card.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkComponent implements OnInit {
  @Input() drink: Drink;
  @Input() userIsAuth: boolean;
  @Input() userId: any;
  @Input() starreds: any[];

  //STARRED FEATURE
  drinkIsStarred = false;
  star = "★";

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.userIsAuth) {
      //FIND IF DRINK IS STARRED, TOGGLE drinkIsStarred BUTTON
      this.starreds.forEach(el => {
        if (el.drink.id === this.drink.id) {
          this.drinkIsStarred = true;
          this.star = "☆";
        }
      });
    }
  }

  onSaveStarred() {
    //SERVER REQUIRES THE DRINK ID & USER ID FOR STARRED CREATION
    this.userService.saveStarred(this.drink.id, this.userId).subscribe(() => {
      //UPDATE VALUES & starreds ARR
      this.drinkIsStarred = true;
      this.star = "☆";

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
        this.star = "★";

        this.updateStarred();
      });
  }

  //UPDATE STARRED DATA FOR DISPLAY
  updateStarred() {
    this.userService.getStarred().subscribe((starred: any) => {
      this.starreds = starred.doc;
    });
  }

  //ENABLES TOGGLE BUTTON
  clickHandler() {
    if (this.drinkIsStarred) {
      this.onDeleteStarred();
    } else if (!this.drinkIsStarred) {
      this.onSaveStarred();
    }
  }
}
