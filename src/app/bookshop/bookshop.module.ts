import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBookShopComponent } from './list-book-shop/list-book-shop.component';
import { BookShopRoutingModule } from './bookShop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AddBookShopComponent } from './add-book-shop/add-book-shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteBookShopComponent } from './delete-book-shop/delete-book-shop.component';
import { UpdateBookShopComponent } from './update-book-shop/update-book-shop.component';




@NgModule({
  declarations: [
    ListBookShopComponent,
    AddBookShopComponent,
    DeleteBookShopComponent,
    UpdateBookShopComponent
  ],
  imports: [
    CommonModule,
    BookShopRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookshopModule { }
