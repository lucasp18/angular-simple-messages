import { Injectable } from '@angular/core';
import { Message } from './message.model';

@Injectable()
export class MessagesService {

  private messages: Message[] = [];
  
  constructor() { }

  private messageFactory(text:string){
  	this.messages.push(new Message(text));
  } 

  addMessage(text:string) :Message[]{
  	this.messages = [...this.messages, new Message(text)]
  	return this.messages;
  }
}

