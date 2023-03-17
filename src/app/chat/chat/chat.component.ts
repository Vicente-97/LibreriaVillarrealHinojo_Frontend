import { Component } from '@angular/core';
import { ChatgptService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message!:string

  constructor(private seviceChat: ChatgptService) { }



  sendMessage(){

    this.seviceChat.getDataFromOpenAI(this.message);
    this.message = '';

  }

  limpiar(){
    location.reload();

  }


}
