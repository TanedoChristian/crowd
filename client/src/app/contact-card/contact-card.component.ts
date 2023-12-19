import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from '../data/user';
import axios from 'axios';
import Contact from '../data/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  @Input() users: Contact[] = [];
  @Output() dataEvent = new EventEmitter<Contact>();

  showUserProfile(user: any) {
    console.log(user._id);
    axios
      .get(`http://localhost:3000/api/user/${user?._id}`)
      .then(({ data }) => {
        this.dataEvent.emit(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
