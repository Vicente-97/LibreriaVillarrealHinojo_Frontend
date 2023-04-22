import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookShop } from '../interfaces/bookshopInterface';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class BookshopService {

  constructor(private http: HttpClient) { }

  getShop():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/bookshop`)
  }

  //Método para poder añadir una libreria
  addBookshop(name:string, location:string, description:string ):Observable<any>{
    const headers = { 'content-type': 'application/json'}   
    return this.http.post<any>(environment.apiUrl+'/bookshop',{'name':name, 'location':location, 'description': description},{'headers':headers})
  }

  deleteBookShop(name:string):Observable<any>{
    const headers = { 'content-type': 'application/json'}   
    return this.http.delete<any>(`${environment.apiUrl}/bookshopping/${name}`)
  }

  updateBookShop(name:string, location:string, description:string):Observable<any>{
    const headers = { 'content-type': 'application/json'}   
    return this.http.put<any>(`${environment.apiUrl}/bookshopping/${name}`,{'name':name, 'location':location, 'description': description},{'headers':headers})
  }

}
