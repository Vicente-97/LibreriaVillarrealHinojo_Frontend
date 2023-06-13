import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookShop } from 'src/app/interfaces/bookshopInterface';
import { BookshopService } from '../bookshop.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-list-book-shop',
  templateUrl: './list-book-shop.component.html',
  styleUrls: ['./list-book-shop.component.css']
})
export class ListBookShopComponent {

  // Atributos o propiedades declaradas que nos haran falta, una lista de librerías físicas, variable de
  // si es admin o no para poder acceder, y variable para decodificar el token.
  public bookShop :BookShop[]=[]
  isAdmin=false;
  jwt: string | null = null;

  constructor(private route : ActivatedRoute, private servicio:BookshopService, private authSer: AuthService ) { }

  ngOnInit(): void {
    this.getBookShoping()
    // console.log(this.bookShop);
    // recupera el token y comprueba si es admin o no.
    this.jwt = localStorage.getItem("jwt")
    if(this.jwt !=null){
      this.isAdmin=this.authSer.isUserAdmin(this.jwt)

    }
    
  }

  // método para obtener las librerias físicas.
  getBookShoping(){
    this.servicio.getShop().subscribe({
      
      next:(resp)=> {
        this.bookShop= resp
      }, error:(err)=> {
        console.log(err);
        
      },

    })



  }

}

