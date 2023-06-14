import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Books } from '../../interfaces/bookInterface';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-list-by-cat',
  templateUrl: './list-by-cat.component.html',
  styleUrls: ['./list-by-cat.component.css']
})
export class ListByCatComponent {

  public books :Books[]=[]
  isAdmin=false;
  jwt: string | null = null;
  username=localStorage.getItem("username")
  addedFav=false;


  constructor(private route : ActivatedRoute, private servicio:BooksService, private router:Router, private authSer: AuthService, private shopping : ShoppingCartService) { }


// Lógica sencilla, solo recuperamos el parámetro y obtenemos los libros de una categoría.
  ngOnInit(): void {

    const id=this.route.snapshot.params['id']
    this.servicio.getBooksByCat(id).subscribe({
      next:(resp)=> {
        this.books=resp
        this.jwt = localStorage.getItem('jwt');
  
   
   if(this.jwt){
     this.isAdmin = this.authSer.isUserAdmin(this.jwt);
   }
      },error:(err)=> {
        
      },
    })

  }

  addToCart(book:Books){
    this.shopping.agregarAlCarrito(book)
    window.sessionStorage.setItem('carrito', JSON.stringify(this.shopping.books));

    Swal.fire({
      icon: 'success',
      title: 'Article add',
      text: 'Article add',
  });
  }

  addToFavorite(book:Books){
    this.username= localStorage.getItem("username")
    if(this.username!=null){
      this.servicio.addToFavoriteBook(book, this.username).subscribe({
        next:(resp) =>{
          this.addedFav=true;
           
              Swal.fire({
                icon: 'success',
                title: 'Favorite add',
                text: '¡Favorite added!',
            });
            this.router.navigate(['/favorites/list'])
           
        
        }, error:(err)=> {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Favorito ya esta añadido!',
          })
          this.router.navigate(['/favorites/list'])
        },
      })

    }
   

  }

}
