import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestServices } from './services/rest.service';
import { SigninService } from './services/signin.service';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
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

// asdasdoasdoahsdaiusdidasdasd
// adasdasdad
