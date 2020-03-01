import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DrinksComponent } from './drinks.component';
import { DrinkComponent } from './drink/drink.component';
import { DrinkItemComponent } from './drink-list/drink-item/drink-item.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinksRoutingModule } from './drinks-routing.module';
import { RemoveDuplicatesPipe } from '../shared/remove-duplicates.pipe';
import { DrinkLineComponent } from './drink-list/drink-line/drink-line.component';

@NgModule({
   declarations: [
      DrinksComponent,
      DrinkComponent,
      DrinkItemComponent,
      DrinkListComponent,
      RemoveDuplicatesPipe,
      DrinkLineComponent
   ],
   imports: [DrinksRoutingModule, RouterModule, CommonModule]
})
export class DrinksModule {}
