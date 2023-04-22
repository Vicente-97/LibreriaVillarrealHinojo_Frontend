import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookshopService } from '../bookshop.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book-shop',
  templateUrl: './add-book-shop.component.html',
  styleUrls: ['./add-book-shop.component.css']
})
export class AddBookShopComponent {

  @ViewChild('addBookShop') addCategoryForm!: NgForm

  name:string=''
  location:string=''
  description:string =''


  constructor(private servicio : BookshopService, private route : Router) { }

  ngOnInit(): void {
  }

  //Método para poder validar los campos del formulario.
  nombreValido(campo:string): boolean {
    return this.addCategoryForm?.controls[campo]?.invalid
    && this.addCategoryForm?.controls[campo]?.touched;
  }





  addBookShopping(){

    this.servicio.addBookshop(this.name, this.location, this.description).subscribe({
      next:(resp)=> {
        if (resp) {
          
          if(this.addCategoryForm.valid){
          
            Swal.fire({
              icon: 'success',
              title: 'Form completed successfully',
              text: '¡Bookshop added!',
          });
          this.route.navigate(['/bookshop/list'])
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
