import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Drink } from 'src/app/shared/drink.model';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
   selector: 'app-starred',
   templateUrl: './starred-list.component.html',
   styleUrls: ['./starred-list.component.scss']
})
export class StarredListComponent implements OnInit {
   starredsDrinks$: Observable<Drink[]>;
   starreds: any[];
   index: number;

   isLoading = false;

   constructor(private userService: UserService) {}

   ngOnInit() {
      this.isLoading = true;

      //EXPOSE STARRED FOR DISPLAY
      this.starredsDrinks$ = this.userService
         .getStarredDrinks()
         .pipe(delay(150))
         .pipe(map((starred: any) => starred.doc));

      this.userService.getStarred().subscribe((starred: any) => {
         this.starreds = starred.doc;
      });

      this.isLoading = false;
   }

   onSort() {
      this.starredsDrinks$ = this.userService.getStarredDrinks().pipe(
         map((starred: any) => {
            starred.doc.sort((star1, star2) => {
               //MANUAL SORT
               return star1.name < star2.name ? -1 : 1;
            });
            return starred.doc;
         })
      );
   }
}
