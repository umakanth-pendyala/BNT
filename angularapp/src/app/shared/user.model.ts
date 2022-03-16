import { Injectable } from "@angular/core";

@Injectable()
export class UserModelService {
  private validUser: boolean = false;
  private userId: string = "";


  setValidUser(validUser: boolean) {
    this.validUser = validUser;
  }

  getUserValidityStatus(): boolean {
    return this.validUser;
  }
}