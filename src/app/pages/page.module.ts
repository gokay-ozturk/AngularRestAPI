import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { HomeComponent } from '../pages/home/home.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [

  ]
})
export class PageModule { }
