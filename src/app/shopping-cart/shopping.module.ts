import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { UserBuysComponent } from './user-buys/user-buys.component';




@NgModule({
  declarations: [
  ShoppingCartComponent,
  UserBuysComponent,
  
  ],
  imports: [
   ShoppingRoutingModule,
   SharedModule,
   CommonModule,
   FormsModule,
   HttpClientModule,
   RouterModule
   
  ],
  exports:[
    ShoppingCartComponent
  ]
})
export class ShoppingModule { }
