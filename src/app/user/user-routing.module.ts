import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user.component";
import { StarredListComponent } from "./starred-list/starred-list.component";

const routes: Routes = [
  {
    path: "profile",
    component: UserComponent,
    data: { animation: "UserPage" }
  },
  {
    path: "starred",
    component: StarredListComponent,
    data: { animation: "StarredListPage" }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
