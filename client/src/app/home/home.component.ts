import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  count: number = 0;

  constructor() {}

  TestEvent(data: string) {
    console.log(data);
  }
}
