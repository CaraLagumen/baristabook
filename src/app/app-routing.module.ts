import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NavComponent } from "./components/nav/nav.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/drinks", pathMatch: "full" },
  {
    path: "nav/:link",
    component: NavComponent,
    data: { animation: "NavPage" }
  },
  {
    path: "drinks",
    loadChildren: "./drinks/drinks.module#DrinksModule",
    data: { animation: "DrinksPage" }
  },
  {
    path: "auth",
    loadChildren: "./auth/auth.module#AuthModule",
    data: { animation: "AuthPage" }
  },
  {
    path: "user",
    loadChildren: "./user/user.module#UserModule",
    canActivate: [AuthGuard],
    data: { animation: "UserPage" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
