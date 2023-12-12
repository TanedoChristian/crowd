import { Component } from '@angular/core';
import User from '../data/user';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: User = {
    userId: 0,
    firstname: '',
    lastname: '',
    address: '',
    dateOfBirth: '',
    username: '',
    email: '',
    password: '',
  };

  handleSubmit() {
    console.log(this.user);

    axios
      .post('http://localhost:3000/api/user', this.user)
      .then((data) => {
        Swal.fire({
          title: 'User Added',
          icon: 'success',
        });

        window.location.href = '/';
      })
      .catch((err) => console.log(err));
  }
}
