import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/home/login/login.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { ProductsHomeComponent } from './components/user/products-home/products-home.component';
import { CartComponent } from './components/user/cart/cart.component';
import { RoleGuardService } from './auth/role-guard.service';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'producthome',  component: ProductsHomeComponent, canActivate: [RoleGuardService] },
  { path: 'cart',  component: CartComponent, canActivate: [RoleGuardService] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
