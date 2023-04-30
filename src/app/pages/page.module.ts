import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { HeaderComponent } from '../nav/header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../pages/home/home.component';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../modules/material.module';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [

  ]
})
export class PageModule { }
