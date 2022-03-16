import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { RestServices } from '../services/rest.service';
import { SigninService } from '../services/signin.service';
import { UserModelService } from '../shared/user.model';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnDestroy {



  constructor(
    private signInService: SigninService,
    private restService: RestServices,
    private router: Router,
    private userModelService: UserModelService
  ) {

  }


  validForm: boolean = false;
  validEmail: boolean = false;
  validPassword: boolean = false;
  // emailVerified: boolean = this.otpService.otpVerified;
  emailVerified: boolean = true;




  emailValidity(email: any) {
    this.signInService.setEmail(email);
    return this.signInService.checkValidityOfEmail();
  }

  passwordValidity(password: any) {
    this.signInService.setPassword(password);
    return this.signInService.checkValidityOfPassword();
  }

  onSubmit(formData: NgForm) {

    this.signInService.setEmail(formData.value.username);
    this.signInService.setPassword(formData.value.password);
    this.validEmail = this.signInService.checkValidityOfEmail();
    this.validPassword = this.signInService.checkValidityOfPassword();
    this.validForm = this.validEmail && this.validPassword;
    if (this.emailValidity(formData.value.username) && this.passwordValidity(formData.value.password)) {
      this.restService.postUserLoginData({
        email: formData.value.username,
        password: formData.value.password
      }).subscribe(responseData => {
        if (responseData == true) {
          this.userModelService.setValidUser(true);
          this.router.navigate(['/homepage'])
        } else {
          console.log(false)
        }
      }, error => {
        console.log("error occured while connecting to server")
      })
    }

    formData.reset()
  }

  testValues() {
    console.log(this.emailVerified);
  }

  ngOnDestroy() {
  }
}

//[ngClass]="{'is-invalid': signInForm.controls.username.touched ? !validEmail : false}"
//  @ViewChild('f') signInForm :NgForm | undefined;