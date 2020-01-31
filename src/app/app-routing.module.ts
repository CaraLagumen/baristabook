import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
   { path: '', redirectTo: '/drinks', pathMatch: 'full' },
   { path: 'drinks', loadChildren: './drinks/drinks.module#DrinksModule' },
   { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
   {
      path: 'user',
      loadChildren: './user/user.module#UserModule',
      canActivate: [AuthGuard]
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
   providers: [AuthGuard]
})
export class AppRoutingModule {}
