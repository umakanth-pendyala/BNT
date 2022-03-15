import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes = [ 
  { path: 'users/login', component: SigninComponent},
  {path:'About',component:AboutComponent}, 
  {path:'Contact',component:ContactComponent},
  {path:'homepage',component:HomepageComponent},
  { path: '', redirectTo: '/users/login', pathMatch: 'full'},
  { path: 'users/signup', component: SignupComponent},
  {path: 'products', component: ProductsComponent},
  { path:'cart', component: CartComponent},
  { path: 'orders', component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
