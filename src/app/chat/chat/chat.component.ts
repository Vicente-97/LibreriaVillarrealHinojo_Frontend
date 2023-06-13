import { Component } from '@angular/core';
import { ChatgptService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  // Atributos que necesitaremos para el chat.
  message!:string
  respuesta! :any
  constructor(private seviceChat: ChatgptService) { }


// Método que manda el mensaje y obtiene la respuesta a través del backend.
  sendMessage(){

    // this.seviceChat.getDataFromOpenAI(this.message);
    this.seviceChat.getMessageChat(this.message).subscribe({
      next:(resp:any)=> {
       
        this.respuesta=resp.message;
        // console.log(resp);
        
      },error:(err)=> {
        alert("error en la peticion al chat live.")
      },
    })
    this.message = '';

  }

  // Limpia el mensaje.
  limpiar(){
    location.reload();

  }


}
