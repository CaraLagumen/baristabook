import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { StarredItemComponent } from './starred-list/starred-item/starred-item.component';
import { StarredListComponent } from './starred-list/starred-list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
   declarations: [UserComponent, StarredListComponent, StarredItemComponent],
   imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule]
})
export class UserModule {}
