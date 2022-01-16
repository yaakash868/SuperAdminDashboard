import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { PlanComponent } from './plan/plan.component';
import { PlanRequestComponent } from './plan-request/plan-request.component';
import { SettingComponent } from './setting/setting.component';
import { AppComponent } from './app.component';
const appRoute:Routes = [
  {path:"", redirectTo:"Dashboard", pathMatch:'full'},
  {path:"Dashboard",component:DashboardComponent},
  {path:"User", component:UserComponent},
  {path:"Plans", component:PlanComponent},
  {path:"PlanRequest", component:PlanRequestComponent},
  {path:"Setting", component:SettingComponent},
  {path:"**",component:DashboardComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
