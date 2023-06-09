import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookshopService } from '../bookshop.service';
import { BooksService } from 'src/app/books/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-book-shop',
  templateUrl: './update-book-shop.component.html',
  styleUrls: ['./update-book-shop.component.css']
})
export class UpdateBookShopComponent {
  @ViewChild('updateShop') updateShop!: NgForm

  // Atributos o propiedades que nos haran falta
  name:string=''
  location:string=''
  description:string =''
  


  constructor(private servicio : BookshopService, private bookSer: BooksService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name= this.route.snapshot.params['id']
    console.log(this.route.snapshot.params['id']);
    
    console.log(this.name);
    this.bookSer.getBookShop(this.name).subscribe({
      next:(resp)=> {
        this.location=resp.location;
        this.description=resp.description;
      },
    })
    



  }

  //Método para poder validar los campos del formulario.
  nombreValido(campo:string): boolean {
    return this.updateShop?.controls[campo]?.invalid
    && this.updateShop?.controls[campo]?.touched;
  }

// Método para actualizar una libreria física.
  updateBookShop(){
      this.servicio.updateBookShop(this.name, this.location, this.description).subscribe({
        next:(resp)=> {
          if (resp) {
            
            if(this.updateShop.valid){
            
              Swal.fire({
                icon: 'success',
                title: 'Form completed successfully',
                text: '¡Bookshop Updated!',
            });
            this.router.navigate(['/bookshop/list'])
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something has gone wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }}
        },error:(err)=> {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something has gone wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        },
      })



  }
}
