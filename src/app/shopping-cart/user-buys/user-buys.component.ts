import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-buys',
  templateUrl: './user-buys.component.html',
  styleUrls: ['./user-buys.component.css']
})
export class UserBuysComponent {

  // Atributos para poder conocer las compras de un user
Buys: any[]=[]
username: any
recommended :any[]=[]


constructor( private shopping : ShoppingCartService, private route: Router) { }


ngOnInit(): void {
  this.username= localStorage.getItem("username")
  // console.log(this.username);
  
  this.shopping.getBuys(this.username).subscribe({
    next:(resp)=> {
      this.Buys=resp
      
      
      // console.log(this.Buys);
    },
  })
  // Obtiene las recomendaciones para un user en concreto.
  this.shopping.getRecommended(this.username).subscribe({
    next:(resp)=> {
      this.recommended=resp
    },
  })
 
}

// Método para obtener compras de un user.
obtenerCompras(username :string){

  username=this.username
  this.shopping.getBuys(username).subscribe({
    next:(resp)=> {
      this.Buys=resp
    },
  })


}

}
