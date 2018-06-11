import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import{ListaAnimeComponent} from './lista-anime/lista-anime.component';
import {AuthGuard} from './guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {TestComponent} from './test/test.component';
import {AdminGuard} from './guard/admin.guard';
import {MaterialModule} from './material/material.module';

export const appRoutes: Routes = [

  { path: 'login', component: LoginComponent ,pathMatch :'full'  },
  { path: 'register', component: LoginComponent , pathMatch:'full' },
  {path:'Anime', component:ListaAnimeComponent, pathMatch:'full'},

  { path: 'test/y', component: TestComponent , canActivate :[AuthGuard]},
  { path: '404' , component: NotFoundComponent , canActivate: [AuthGuard]},
  { path: '**',   redirectTo: 'login', pathMatch: 'full' },



];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
