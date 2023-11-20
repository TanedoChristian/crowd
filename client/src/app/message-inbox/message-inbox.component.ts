export default interface IMessage {
  from: string;
  to: string;
  message: string;
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import Peer from 'peerjs';

@Component({
  selector: 'app-message-inbox',
  templateUrl: './message-inbox.component.html',
  styleUrls: ['./message-inbox.component.scss'],
})
export class MessageInboxComponent {
  myPeer = new Peer({
    host: '/',
    port: 3001,
  });

  public messageList: any = [];
  public message: IMessage = {
    from: '',
    to: '',
    message: '',
  };

  @ViewChild('videoGrid') videoGrid: ElementRef<HTMLDivElement> | undefined;
  myVideo: any = document.createElement('video');

  constructor(private socket: Socket) {}

  sendMessage() {
    if (!this.isMessageEmpty()) {
      this.message.from = 'tanedochristian1@gmail.com';
      this.message.to = 'email@windster.com';
      this.messageList.push(this.message);

      this.socket.emit('send-message', this.message);

      this.message = {
        from: '',
        to: '',
        message: '',
      };
    } else {
      alert('Message is Empty');
    }
  }

  isMessageEmpty() {
    return this.message.message == '';
  }

  makeCall() {}
}
