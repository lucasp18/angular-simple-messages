import { Component,Output,Input,EventEmitter,OnInit } from '@angular/core';
import { Message } from '../../core/message.model';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  public text = '';

 
  @Output() onNewMessage:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  buttonClicked() {
    console.log('The button has been clicked');
    console.log(`this.text is currently ${this.text}`);  	
  	this.onNewMessage.emit(this.text);
  }

  ngOnInit() {
  }
}
