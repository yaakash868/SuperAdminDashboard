import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { PlanComponent } from './plan/plan.component';
import { PlanRequestComponent } from './plan-request/plan-request.component';
import { SettingComponent } from './setting/setting.component';
import { AppComponent } from './app.component';
const appRoute:Routes = [
  {path:"", component:DashboardComponent},
  {path:"User", component:UserComponent},
  {path:"Plan", component:PlanComponent},
  {path:"PlanRequest", component:PlanRequestComponent},
  {path:"Setting", component:SettingComponent},
   ];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
