import { Component } from '@angular/core';
import { UserLoginDetails } from './interface/userLoginDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public userDetails: UserLoginDetails = {
    username: '',
    password: '',
  };

  handleLogin(e: Event) {
    e.preventDefault();

    console.log(this.userDetails);
  }
}
