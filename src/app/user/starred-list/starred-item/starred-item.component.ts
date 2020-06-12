import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

import { UserService } from "../../user.service";
import { Drink } from "../../../shared/drink.model";
import { Starred } from "../../../shared/starred.model";

@Component({
  selector: "app-starred-item",
  templateUrl: "./starred-item.component.html",
  styleUrls: [
    "./starred-item.component.scss",
    "../../../shared/drink-card.scss"
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarredItemComponent {
  @Input() starredDrink: Drink;
  @Input() starreds: Starred[];
  @Input() index: number;

  viewStarred = false;
  star = "★";
  isDisabled = false;

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  //TOGGLE STARRED PREVIEW
  onViewStarred() {
    this.viewStarred = !this.viewStarred;
  }

  onDeleteStarred() {
    //PLUG IN STARRED ARR & DRINK ID FOR COMPARISON IN DELETE SERVICE
    this.userService
      .deleteStarred(this.starreds, this.starredDrink.id)
      .subscribe(() => {
        this.isDisabled = true;

        this.cd.markForCheck();
      });
  }

  hoverHandler(type: `action` | `reset`) {
    type === `action` && !this.isDisabled
      ? (this.star = "☆")
      : (this.star = "★");
  }
}
