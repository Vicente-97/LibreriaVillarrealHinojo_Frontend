import { Component, OnInit } from '@angular/core';
import { Books } from '../../interfaces/bookInterface';
import { BooksService } from '../services/books.service';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../../auth/services/auth.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { BookShop } from 'src/app/interfaces/bookshopInterface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list ',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('agregarProducto', [
      state('void', style({ transform: 'scale(0)' })),
      transition(':enter', [
        animate('0.2s ease-out', style({ transform: 'scale(1.2)' })),
        animate('0.2s', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})

export class ListComponent implements OnInit {

  //variables que nos ayudarán en nuestra lógica, tanto para saber si es admin,
  // como para localizar el token o los libros y libros de respaldo.
  isAdmin=false;
  jwt: string | null = null;
  public books :Books[]=[]
  public booksFullDatos:Books[]=[]
  public Bookshop:BookShop[]=[]
  isbn :string |null = null;
  //variable para poder realizar el filtrado.
  filtroNombre!: string;
  username=localStorage.getItem("username")
  addedFav=false;
  librosFavoritos:Books[]=[]

  
  
  constructor(private bookServ : BooksService, private shopping : ShoppingCartService, private servicio: AuthService, private route : Router) { }

  

  //Método del carrito para poder añadir al carrito un libro.
  addToCart(book:Books){
    this.shopping.agregarAlCarrito(book)
    window.sessionStorage.setItem('carrito', JSON.stringify(this.shopping.books));
  }
  
  
  //Método que nos proporciona la lógica necesaria para poder filtrar por títutlo.
  filtrar() {
    if(this.filtroNombre.trim().length!=0){
      this.books = this.books.filter(dato => dato.title.toLowerCase().includes(this.filtroNombre.toLowerCase()));
    }else{
      this.books=this.booksFullDatos
    }
  }

  //Recuperamos el token y vemos si es Admin utilizando nuestro servicio.
  ngOnInit(): void {
   this.getBooks()
   this.jwt = localStorage.getItem('jwt');
  
   
   if(this.jwt){
     this.isAdmin = this.servicio.isUserAdmin(this.jwt);
   }



  }

  añadido(username:string){
    if(this.username!=null){
      this.bookServ.getFavoriteUser(this.username).subscribe({
        next:(resp)=> {
          this.librosFavoritos=resp
          this.librosFavoritos.forEach(book => {
            this.books.forEach(book => {
              if(book==book){
                this.addedFav=true
              }

            });
          });
        },
      })
    }

  }

  //Método para obtener una lista de libros de respaldo.
  getBooks(){
    this.bookServ.getBooks().subscribe({
      next: (resp)=> {this.books=resp
        this.booksFullDatos=resp

        // this.books.forEach(book => {
        //   this.bookServ.getLibraryofBook(book.isbn).subscribe({
        //     next:(resp)=> {
        //       this.Bookshop=resp;
        //     },
        //    })
        // });
        
      }
      
    })

  }

   
    selected! :any[];

    onSelect({ selected }:any) {
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
    }

    onActivate(event:any) {
      console.log(event);
    }

    addToFavorite(book:Books){
      this.username= localStorage.getItem("username")
      if(this.username!=null){
        this.bookServ.addToFavoriteBook(book, this.username).subscribe({
          next:(resp) =>{
            this.addedFav=true;
             
                Swal.fire({
                  icon: 'success',
                  title: 'Favorite add',
                  text: '¡Favorite added!',
              });
              this.route.navigate(['/favorites/list'])
             
          
          }, error:(err)=> {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Favorito ya esta añadido!',
            })
            this.route.navigate(['/favorites/list'])
          },
        })
  
      }
     

    }


    

    deleteFavorite(namebook:string){
      this.username= localStorage.getItem("username")
      if(this.username!=null){

        this.bookServ.deleteFavoriteBook(namebook, this.username).subscribe({
          next:(resp) =>{
            Swal.fire({
              icon: 'success',
              title: 'Favorite deleted',
              text: '¡Favorite deleted!',
          });
          this.route.navigate(['/favorites/list'])
          
      
          },error:(err)=> {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Favorito ya esta eliminado!',
            })
            this.route.navigate(['/favorites/list'])
          },
        })
  
      
        

      }
      


    }

     }

    



