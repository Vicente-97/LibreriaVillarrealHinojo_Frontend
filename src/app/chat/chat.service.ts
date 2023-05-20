import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { filter, from, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


 //const api = environment.API_KEY;


declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  constructor(private http: HttpClient) {
   
   }

  // readonly configuration = new Configuration({  
  //     apiKey:api

  // });

  // readonly openai = new OpenAIApi(this.configuration);

  // getDataFromOpenAI(text: string){

  //   from(this.openai.createCompletion({
    
  //     model:'text-davinci-003',
  //     prompt:text,
  //     max_tokens:256,
  //     temperature:0.7

  //   })).pipe(
        
  //    filter(resp=>!!resp && !!resp.data),
  //    map(resp=>resp.data),
  //    filter((data:any)=>(
      
  //     data.choices && data.choices.length > 0 && data.choices[0].text
    
  //    )),
  //    map(data=>data.choices[0].text)

  //   ).subscribe(data=>{


  //     $('.respuesta').append(`
      
  //     <ul class="list-group mb-2">
  //     <li class="list-group-item bg-primary text-light">${data}</li><br>
  //     </ul>

  //     `)

  //   })
    

  // }

  getMessageChat(message:string){
    return this.http.get<any>(`${environment.apiUrl}/chatboot/chat?message=${message} `, { responseType: 'json' })
    }
  }

  
  // .pipe(
        
  //   filter(resp=>!!resp && !!resp.data),
  //   map(resp=>resp.data),
  //   filter((data:any)=>(
     
  //    data.choices && data.choices.length > 0 && data.choices[0].text
   
  //   )),
  //   map(data=>data.choices[0].text)

  //  ).subscribe(data=>{


  //   $('.respuesta').append(`
    
  //   <ul class="list-group mb-2">
  //   <li class="list-group-item bg-primary text-light">${data}</li><br>
  //   </ul>

  //   `)

  // })
 
  // .subscribe({
  //   next:(resp)=> {
  //     $('.respuesta').append(`
    
  //     <ul class="list-group mb-2">
  //     <li class="list-group-item bg-primary text-light">${resp}</li><br>
  //     </ul>
  //     `)
  //   },error:(err)=> {
  //     alert("error en la peticion al chatgpt")
  //   },
  // })

