import { Component } from '@angular/core';

import { BooksService } from '../../books/services/books.service';

@Component({
  selector: 'app-list-fav',
  templateUrl: './list-fav.component.html',
  styleUrls: ['./list-fav.component.css']
})
export class ListFavComponent {

  // Atributos o propiedades que nos serviran de ayuda. Username para recuperar el usurname del usuario logueado.
  // Array de favoritos para poder listarlos.
  username:string|null=localStorage.getItem("username")
  Favorites:any[]=[]

  constructor( private bookService: BooksService) { }


  ngOnInit(): void {
  if(this.username){
    this.bookService.getFavoriteUser(this.username).subscribe({
      next:(resp)=> {
        this.Favorites=resp
      },
    })

    
  }
}
}
