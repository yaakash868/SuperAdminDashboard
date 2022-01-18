import { RegistrationComponent } from './registration/registration.component';
import { SuperAdminDashboardModule } from './Modules/super-admin/SuperAdminDashboard.module';
import { LoginComponent } from './login/login.component';
import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const appRoute:Routes = [
  {path:"", component:LoginComponent},
  {path:"Registeration",component:RegistrationComponent},
  {path:"**", component:LoginComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(appRoute),SuperAdminDashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
