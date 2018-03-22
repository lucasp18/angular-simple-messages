import { Component, OnInit } from '@angular/core';
import { Message } from '../core/message.model';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
  styleUrls: ['./new-messages.component.scss']
})
export class NewMessagesComponent implements OnInit {

	public messages: Message[] = [ new Message('novo')];
  constructor() { }

  ngOnInit() {
  }

  onNewMessage(text:string){
  	const m = new Message(text);
  	this.messages.push(m);
  	console.dir(this.messages);
  }

}
