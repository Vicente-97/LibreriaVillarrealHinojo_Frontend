import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RolGuardGuard } from '../rol-guard.guard';

import { ListFavComponent } from './list-fav/list-fav.component';



const routes: Routes = [
    {
      path: '',
      children: [
      
        { path: 'list', component: ListFavComponent },
        
       
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })

  export class FavoritesRoutingModule { }