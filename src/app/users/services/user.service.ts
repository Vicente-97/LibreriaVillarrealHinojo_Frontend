import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userCompleto, user } from '../../interfaces/userCompleto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Content-type': 'application/octet-stream'
    })
};
  constructor(private http : HttpClient) { }

//Método para poder updatear un usuario. necesitamos un json con los datos a modificar, el username para poder localizar
//el usuario que vamos a updatear y la foto de perfil.
  UpdateUser(json:any, username:string):Observable<any>{
    
    const datos: FormData = new FormData();
    // datos.append('file', fotoperfil, fotoperfil.name);
    datos.append('user', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    
    return this.http.put<any>(`${environment.apiUrl}/users/${username}`,datos)
  }

  //Método por el cual obtenemos un usuario en concreto, pasandole su id o username.
  getUser(id:string):Observable<user>{
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`)
  }

  //Método por el cuál obtenemos los usuarios.
  getUsers():Observable<user[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/users`)
  }

//Método para poder eliminar un usuario.
  deleteUser(username:string):Observable<user>{
    return this.http.delete<any>(`${environment.apiUrl}/users/${username}`)
  }

  //metodo para poder hacer a un usuario usuario admin
  updateUserAdmin(username:string):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/userAdmin/${username}`, { esAdmin: true })
  }

  //metodo para poder hacer a un usuario usuario user
  updateUserUser(username:string):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/userRolUser/${username}`, { esAdmin: false })
  }

  //metodo para poder updatear a un usuario su foto de perfil:
  updateUserProfilePic(username:string, file:File):Observable<any>{

    const datos: FormData = new FormData();

    datos.append('file', file, file.name)
    return this.http.put<any>(`${environment.apiUrl}/userPicture/${username}`, datos)
  }


}
