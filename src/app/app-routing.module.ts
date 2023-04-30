import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

const routes: Routes = [

  {
    path: "",
    component: MainLayoutComponent,
    children:[
      {
        path: "",
        component: HomeComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginLayoutComponent,
    children:[
      {
        path: "",
        component: LoginComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
