import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMessagesComponent } from './new-messages/new-messages.component'; 
import { OldMessagesComponent } from './old-messages/old-messages.component';

const routes: Routes = [
  { path: '', redirectTo:'/new-message' , pathMatch:'full' },
  { path: 'new-message', component: NewMessagesComponent },
  { path: 'old-messages', component: OldMessagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
