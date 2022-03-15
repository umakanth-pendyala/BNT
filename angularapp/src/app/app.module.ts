import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddProductComponent } from './mycomponents/add-product/add-product.component';
import { AdminprodComponent } from './mycomponents/adminprod/adminprod.component';
import { ProductItemComponent } from './mycomponents/product-item/product-item.component';
import { test } from './mycomponents/test.service';
import { RestServices } from './services/rest.service';
import { SigninService } from './services/signin.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    AddProductComponent,
    AdminprodComponent,
    ProductItemComponent
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
    test
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

