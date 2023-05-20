import { Component } from '@angular/core';
import { ChatgptService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message!:string
  respuesta! :any
  constructor(private seviceChat: ChatgptService) { }



  sendMessage(){

    // this.seviceChat.getDataFromOpenAI(this.message);
    this.seviceChat.getMessageChat(this.message).subscribe({
      next:(resp:any)=> {
       
        this.respuesta=resp.message;
        console.log(resp);
        
      },error:(err)=> {
        alert("error en la peticion al chatgpt")
      },
    })
    this.message = '';

  }

  limpiar(){
    location.reload();

  }


}
