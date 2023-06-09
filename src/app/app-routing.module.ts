
import { RouterModule, Routes,  } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesModule } from './categories/categories.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeModule } from './home/home.module';
import {  AuthGuardian } from './guardian.service';
import { RolGuardGuard } from './rol-guard.guard';
import { UsersModule } from './users/users.module';
import { ShoppingModule } from './shopping-cart/shopping.module';


const routes: Routes=[
  { 
  
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },{ 
  
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksModule ),
  },
  { 
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatModule ),canActivate:[AuthGuardian]
  },
  { 
    path: 'category',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesModule ),canActivate:[AuthGuardian]
  },
  { 
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  { 
    path: 'user',
    loadChildren: () => import('./users/users.module').then( m => m.UsersModule ),canActivate:[AuthGuardian]
  },
  { 
    path: 'shopping',
    loadChildren: () => import('./shopping-cart/shopping.module').then( m => m.ShoppingModule ),canActivate:[AuthGuardian]
  },
  { 
    path: 'bookshop',
    loadChildren: () => import('./bookshop/bookshop.module').then( m => m.BookshopModule ),canActivate:[AuthGuardian]
  },
  { 
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesModule ),canActivate:[AuthGuardian]
  },
  
  {
    path: '**',
    component: NotFoundComponent
  }]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}