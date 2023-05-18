import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFavComponent } from './list-fav/list-fav.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FavoritesRoutingModule } from './favorites-routing.module';



@NgModule({
  declarations: [
    ListFavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
   HttpClientModule,
   RouterModule
  ],
  exports:[
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
