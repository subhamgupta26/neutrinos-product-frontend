import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/home/login/login.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { ProductsHomeComponent } from './components/user/products-home/products-home.component';
import { CartComponent } from './components/user/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductsHomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule
  ],
  providers: [HomeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
