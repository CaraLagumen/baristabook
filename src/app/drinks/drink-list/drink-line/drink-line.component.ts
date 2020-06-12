import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

import { UserService } from "../../../user/user.service";
import { Drink } from "../../../shared/drink.model";
import { Starred } from "../../../shared/starred.model";
import { fadeTrigger } from "../../../shared/route-animations";

@Component({
  selector: "app-drink-line",
  templateUrl: "./drink-line.component.html",
  styleUrls: ["./drink-line.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeTrigger]
})
export class DrinkLineComponent implements OnInit {
  @Input() drink: Drink;
  @Input() userIsAuth: boolean;
  @Input() userId: string;
  @Input() starreds: Starred[];

  previewDrink = false;
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

  //TOGGLE DRINK PREVIEW
  onPreviewDrink() {
    this.previewDrink = !this.previewDrink;
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

  //ENABLES TOGGLE BUTTON
  clickHandler() {
    this.drinkIsStarred ? this.onDeleteStarred() : this.onSaveStarred();
  }

  hoverHandler(type: `action` | `reset`) {
    type === `action` && this.drinkIsStarred
      ? (this.star = "☆")
      : (this.star = "★");
  }
}
