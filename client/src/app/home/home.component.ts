import { Component } from '@angular/core';
import User from '../data/user';
import axios from 'axios';
import Contact from '../data/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  count: number = 0;
  users: User[] = [];

  user: Contact = {
    contactId: '',
    email: '',

    firstname: '',
    lastname: '',
    //dateOfBirth: '',
    address: '',
  };

  constructor() {
    const stringUser: any = localStorage.getItem('user');
    const storedUser = JSON.parse(stringUser);

    this.user.contactId = storedUser._id;

    axios
      .get(`http://localhost:3000/api/contact/user/${this.user.contactId}`)
      .then(({ data }) => {
        this.users = data;
      })
      .catch((err) => console.log(err));
  }

  showUserProfile(user: Contact) {
    this.user = user;
  }

  TestEvent(data: string) {
    console.log(data);
  }
}
