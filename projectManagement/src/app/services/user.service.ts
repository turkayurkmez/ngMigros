import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isUserLoggedIn:boolean = false;
  returnUrl: string;

  validateUser(userName:string, pass:string){
    if (userName === 'turkay' && pass === 'admin') {
      this.isUserLoggedIn = true;
      return true;
    }
    return false;
  }
}
