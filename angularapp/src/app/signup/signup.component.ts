import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

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
    console.log(formData.value)
  }
}
