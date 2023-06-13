import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookshopService } from '../bookshop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../books/services/books.service';
import { BookShop } from 'src/app/interfaces/bookshopInterface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-book-shop',
  templateUrl: './delete-book-shop.component.html',
  styleUrls: ['./delete-book-shop.component.css']
})
export class DeleteBookShopComponent {


  @ViewChild('deleteBookShop') deleteBookShop!: NgForm

  name:string=''
  location:string=''
  description:string =''
  


  constructor(private servicio : BookshopService, private bookSer: BooksService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name= this.route.snapshot.params['id']
    // console.log(this.route.snapshot.params['id']);
    
    // console.log(this.name);
    this.bookSer.getBookShop(this.name).subscribe({
      next:(resp)=> {
        this.location=resp.location;
        this.description=resp.description;
      },
    })
    



  }

  //Método para poder validar los campos del formulario.
  nombreValido(campo:string): boolean {
    return this.deleteBookShop?.controls[campo]?.invalid
    && this.deleteBookShop?.controls[campo]?.touched;
  }

  deleteBookshop(){
    this.servicio.deleteBookShop(this.name).subscribe({
      next:(resp)=> {
          if (resp) {
            
            if(this.deleteBookShop.valid){
            
              Swal.fire({
                icon: 'success',
                title: 'Form completed successfully',
                text: '¡Bookshop Deleted!',
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
      },
    })
  }
}
