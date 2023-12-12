import { Component } from '@angular/core';
import { UserLoginDetails } from './interface/userLoginDetails';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: UserLoginDetails = {
    email: '',
    password: '',
  };

  handleLogin() {
    axios
      .post('http://localhost:3000/api/login', this.user)
      .then((data) => {
        window.location.href = '/';
      })
      .catch((err) =>
        Swal.fire({
          title: 'Error',
          text: 'Authentication Error',
          icon: 'error',
        })
      );
  }
}
