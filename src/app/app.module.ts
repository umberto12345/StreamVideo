import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AuthGuard} from './guard';
import {AuthInterceptor} from './helper';
import {AdminGuard} from './guard/admin.guard';
import {AdminInterceptor} from './helper/admin.interceptor';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth.service';
import { ProfileComponent } from './profile/profile.component';
import { ListaAnimeComponent } from './lista-anime/lista-anime.component';
import {AnimeService} from './anime.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    TestComponent,
    ProfileComponent,
    ListaAnimeComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,


  ],
  exports:[RouterModule],
  providers: [ HttpClient,

    AuthGuard, AdminGuard , AuthService, AnimeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AppModule { }
