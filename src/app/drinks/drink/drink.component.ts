import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { Drink } from '../../shared/drink.model';
import { DrinksService } from '../drinks.service';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-drink',
   templateUrl: './drink.component.html',
   styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
   drink$: Observable<Drink>;
   id: string;

   constructor(
      private drinksService: DrinksService,
      private route: ActivatedRoute
   ) {}

   ngOnInit() {
      //FETCH ID FROM ROUTE PARAM
      this.id = this.route.snapshot.paramMap.get('id');

      //EXPOSE DRINK FOR DISPLAY WITH POSSIBLE KEYS
      this.drink$ = this.drinksService
         .getDrink(this.id)
         .pipe(map((drink: any) => drink.doc));
   }
}
