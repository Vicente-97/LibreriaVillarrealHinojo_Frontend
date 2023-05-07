import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-buys',
  templateUrl: './user-buys.component.html',
  styleUrls: ['./user-buys.component.css']
})
export class UserBuysComponent {

Buys: any[]=[]
username: any
recommended :any[]=[]


constructor( private shopping : ShoppingCartService, private route: Router) { }


ngOnInit(): void {
  this.username= localStorage.getItem("username")
  console.log(this.username);
  
  this.shopping.getBuys(this.username).subscribe({
    next:(resp)=> {
      this.Buys=resp
      
      
      console.log(this.Buys);
    },
  })
  
  this.shopping.getRecommended(this.username).subscribe({
    next:(resp)=> {
      this.recommended=resp
    },
  })
 
}

obtenerCompras(username :string){

  username=this.username
  this.shopping.getBuys(username).subscribe({
    next:(resp)=> {
      this.Buys=resp
    },
  })


}

}
