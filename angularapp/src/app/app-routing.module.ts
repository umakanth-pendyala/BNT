import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [ 
  { path: 'users/login', component: SigninComponent },
  { path:'About', component:AboutComponent }, 
  { path:'Contact', component:ContactComponent },
  { path:'homepage', component:HomepageComponent },
  { path: '', redirectTo: '/users/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
