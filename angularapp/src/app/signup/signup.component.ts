/*muskan starts*/
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestServices } from '../services/rest.service';
import { UserModelService } from '../shared/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private restService: RestServices, 
    private router: Router, 
    private userModelService: UserModelService) { }

  ngOnInit(): void {
  }

  validateEmail(email: string) {
    var regexp = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$');
    return regexp.test(email);
  }
  validatePassword(password: string) {
    var regexp = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
    return regexp.test(password);
  }

  validateConformPassword(password: string, conformPassword: string) {
    if (password != conformPassword) {
      return false;
    }

    return true;
  }

  validateContact(contact: string) {
    var regexp = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
    return regexp.test(contact);
  }

  validateUserName(username: string) {
    if (username == "") {
      return false;
    }
    return true;
  }

  validateEntireForm(formData: NgForm) {
    if (this.validateEmail(formData.value.email)
      && this.validatePassword(formData.value.password)
      && this.validateConformPassword(formData.value.password, formData.value.conformPassword)
      && this.validateContact(formData.value.contact)
      && this.validateUserName(formData.value.username)
        
    ) {
      return true;
    } else {
      return false;
    }
  }


  onSubmit(formData: NgForm){
    if (this.validateEntireForm(formData)) {
      this.restService.postUserSignUpData(formData.value).subscribe({
        next: (responseData: any) => {
          if (responseData != false) {
            this.userModelService.setValidUser(true);
            this.router.navigate(['/homepage'])
          } else {
            console.log("Invalid sign up data");
          }
        }
      })
    } else {
      formData.reset();
    }
  }
}

/*muskan ends*/