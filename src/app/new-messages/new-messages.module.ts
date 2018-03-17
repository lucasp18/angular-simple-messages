import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMessagesComponent } from './new-messages.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [NewMessagesComponent, MessageBoxComponent],
  exports: [NewMessagesComponent]
})
export class NewMessagesModule { }
