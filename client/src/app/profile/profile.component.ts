import { Component } from '@angular/core';
import User from '../data/user';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user: User = {
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    address: '',
  };

  constructor() {
    const stringUser: any = localStorage.getItem('user');

    const storedUser = JSON.parse(stringUser);

    axios
      .get(`http://localhost:3000/api/user/${storedUser?._id}`)
      .then(({ data }) => {
        this.user = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleUpdate() {
    console.log(this.user);
    axios
      .put('http://localhost:3000/api/user', this.user)
      .then((data) => {
        Swal.fire({
          title: 'User Updated',
          icon: 'success',
        });
      })
      .catch((err) => console.log(err));
  }
}
