import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ChatComponent } from './chat/chat.component';



const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'gpt', component: ChatComponent  },
        { path: '**', redirectTo: '/chat' }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })

  export class ChatRoutingModule { }