import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from 'src/app/interfaces/bookInterface';
import { environment } from '../../../environments/environment';
import { BookShop } from '../../interfaces/bookshopInterface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

 
  //Obtenemos los libros.
  getBooks():Observable<Books[]>{
    return this.http.get<Books[]>(environment.apiUrl+'/books')
  }

  //Obtenemos los libros de una categoria en concreto.
  getBooksByCat(nameCat:string):Observable<Books[]>{
    return this.http.get<Books[]>(environment.apiUrl+'/booksByCat/'+nameCat)
  }

  //Método para añadir un libro, necesita un json de libro y una foto.
  addBook(json:any, fotoperfil:File):Observable<any>{

    const datos: FormData = new FormData();
    datos.append('book', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    datos.append('file', fotoperfil, fotoperfil.name);

    return this.http.post<any>(`${environment.apiUrl}/books`,datos)
  }


  //Método para obtener un libro concreto por su id o name.
  getBook(id:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/books/${id}`)
  }

  // Método para poder updatear un libro, recibe un id para localizar ese libro
  //un json de los campos nuevos a modificar y una foto.
  updateBook(id:string,json:any, fotoperfil:File):Observable<any>{
    const datos: FormData = new FormData();
    datos.append('book', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    datos.append('file', fotoperfil, fotoperfil.name);

    return this.http.put<any>(`${environment.apiUrl}/books/${id}`,datos)
  }

  //Método para poder borrar un libro, recibe un id o name del libro mediante el cual lo busca y lo borra.
  deletBook(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}/books/${id}`)
  }

  // Obtiene las librerias físicas de un libro.
  getLibraryofBook(id:string):Observable<BookShop[]>{
    return this.http.get<BookShop[]>(`${environment.apiUrl}/avaible/${id}`)
  }

  // 
  putBookshop(jsonBook:any, jsonBookShop:any):Observable<any>{
    const datos: FormData = new FormData();
    datos.append('isbn', new Blob([JSON.stringify(jsonBook)], {type: 'application/json'}))
    datos.append('name', new Blob([JSON.stringify(jsonBookShop)], {type: 'application/json'}))
    
    return this.http.put<any>(`${environment.apiUrl}/bookshop/`,datos)
  }
  
  // Obtiene las libreria  en la que se encuentran disponibles.
  getBookShop(id:string){
    return this.http.get<any>(`${environment.apiUrl}/bookshop/${id}`)
  }
// Borra de la lista de librerias disponibles ese libro.
  deleteBookshop(isbn:string, name:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}/bookshop/${isbn}/${name}`)
  }
  // Añade un libro a tus libros favoritos.
  addToFavoriteBook(json:any, name:string):Observable<any>{
    const datos: FormData = new FormData();
    datos.append('book', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    return this.http.post<any>(`${environment.apiUrl}/favorite/${name}`,datos)
  }

  // Borra un libro de tus libros favoritos.
  deleteFavoriteBook(namebook:string, name:string):Observable<any>{  
    return this.http.delete<any>(`${environment.apiUrl}/favorite/${namebook}/${name}`)
  }

  // Obtiene los favoritos de un user.
  getFavoriteUser(id:string){
    return this.http.get<any>(`${environment.apiUrl}/favorite/${id}`)
  }
// Obtiene un favorito concreto de un user.
  getFavoriteConcreto(namebook:string, username:string){
    return this.http.get<any>(`${environment.apiUrl}/favorite/${namebook}/${username}`)
  }
 
}
