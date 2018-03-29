import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../core';

@Component({
  selector: 'app-messages-area',
  templateUrl: './messages-area.component.html',
  styleUrls: ['./messages-area.component.scss']
})
export class MessagesAreaComponent implements OnInit {
  @Input() messages: Message[] = [];

  constructor() {
    this.messages.push(new Message('Message 1'));
  }

  ngOnInit() {
  }

}
