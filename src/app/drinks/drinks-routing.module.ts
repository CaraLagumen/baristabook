import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { DrinkListComponent } from "./drink-list/drink-list.component";
import { DrinkComponent } from "./drink/drink.component";
import { DrinksComponent } from "./drinks.component";

const routes: Routes = [
  {
    path: "",
    component: DrinkListComponent,
    data: { animation: "DrinkListPage" }
  },
  { path: ":id", component: DrinkComponent, data: { animation: "DrinkPage" } },
  {
    path: "name/:slug",
    component: DrinksComponent,
    data: { animation: "DrinksPage" }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksRoutingModule {}
