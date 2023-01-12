import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService, private router:Router){}
   login(username:string, pass:string){
    let loggedIn = this.userService.validateUser(username, pass);
    if (this.userService.isUserLoggedIn) {
      this.router.navigate([this.userService.returnUrl])
    }
   }
}
