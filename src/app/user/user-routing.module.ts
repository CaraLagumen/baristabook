import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { StarredListComponent } from './starred-list/starred-list.component';


const routes: Routes = [
   { path: 'profile', component: UserComponent },
   { path: 'starred', component: StarredListComponent }
];

@NgModule({
   imports: [CommonModule, RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class UserRoutingModule {}
