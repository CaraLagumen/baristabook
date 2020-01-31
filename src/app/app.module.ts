import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DrinksModule } from './drinks/drinks.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      DrinksModule,
      UserModule,
      SharedModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
   ],
   bootstrap: [AppComponent]
})
export class AppModule {}
