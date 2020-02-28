import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DrinksComponent } from './drinks.component';
import { DrinkComponent } from './drink/drink.component';
import { DrinkItemComponent } from './drink-list/drink-item/drink-item.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinksRoutingModule } from './drinks-routing.module';

@NgModule({
   declarations: [
      DrinksComponent,
      DrinkComponent,
      DrinkItemComponent,
      DrinkListComponent
   ],
   imports: [DrinksRoutingModule, RouterModule, CommonModule]
})
export class DrinksModule {}
