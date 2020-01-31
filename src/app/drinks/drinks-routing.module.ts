import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkComponent } from './drink/drink.component';

const routes: Routes = [
   { path: '', component: DrinkListComponent },
   { path: ':id', component: DrinkComponent }
];

@NgModule({
   imports: [CommonModule, RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DrinksRoutingModule {}
