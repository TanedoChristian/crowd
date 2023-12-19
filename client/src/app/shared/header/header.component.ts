import { Component, EventEmitter, Input, Output } from '@angular/core';
import axios from 'axios';
import Contact from 'src/app/data/contact';
import User from 'src/app/data/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  modal: boolean = false;

  contact: Contact = {
    contactId: '',
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    phoneNumber: '',
  };

  constructor() {
    const stringUser: any = localStorage.getItem('user');
    const storedUser = JSON.parse(stringUser);

    this.contact.contactId = storedUser._id;
  }

  showModal() {
    this.modal = true;
  }

  hideModal() {
    this.modal = false;
  }

  addContact() {
    axios
      .post('http://localhost:3000/api/contacts', this.contact)
      .then(({ data }) => {
        Swal.fire({
          title: 'Success',
          text: 'User Added',
          icon: 'success',
        });
      })
      .catch((err) =>
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong',
          icon: 'error',
        })
      );
  }
}
