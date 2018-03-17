import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

	text = "bla";
  constructor() { }

  ngOnInit() {
  }

  buttonClick(){
  	console.log("clicou");
  	console.log("texto: " + this.text);
  }

  alterarText(event:any){
  	//console.dir(event);
  	this.text = event.target.value;
  	//this.text = text;
  }

}
