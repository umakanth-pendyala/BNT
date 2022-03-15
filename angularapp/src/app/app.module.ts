import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './shared/filter.pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RestServices } from './services/rest.service';
import { SigninService } from './services/signin.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    ProductsComponent,
    HomepageComponent,
    FilterPipe,
    HeaderComponent,
    CartComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [    
    SigninService,
    RestServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

