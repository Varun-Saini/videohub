import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAuthGuard } from './user-auth.guard';
//import {} from "@angular/router";

const routes: Routes = [{
  path: '',
  loadChildren: 'app/frontend/frontend.module#FrontendModule',
  canActivate: [UserAuthGuard]
},{
  path: 'dashboard',
  loadChildren: 'app/backend/backend.module#BackendModule',
  canActivate: [UserAuthGuard]
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
