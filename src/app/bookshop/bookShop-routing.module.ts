import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookShopComponent } from './list-book-shop/list-book-shop.component';
import { RolGuardGuard } from '../rol-guard.guard';
import { AddBookShopComponent } from './add-book-shop/add-book-shop.component';
import { DeleteBookShopComponent } from './delete-book-shop/delete-book-shop.component';
import { UpdateBookShopComponent } from './update-book-shop/update-book-shop.component';




const routes: Routes = [
    {
      path: '',
      children: [
         { path: 'addBookShop',canActivate:[RolGuardGuard], component: AddBookShopComponent },
         { path: 'deleteBookshop/:id',canActivate:[RolGuardGuard], component: DeleteBookShopComponent },
        { path: 'list', component: ListBookShopComponent },
        { path: 'updateBookShop/:id',canActivate:[RolGuardGuard], component: UpdateBookShopComponent },
        // { path: 'listByCat/:id', component: ListByCatComponent },
        { path: '**', redirectTo: 'books' }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })

  export class BookShopRoutingModule { }