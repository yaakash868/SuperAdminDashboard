import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { PlanComponent } from './plan/plan.component';
import { PlanRequestComponent } from './plan-request/plan-request.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const appRoute:Routes = [
{path:"", component:DashboardComponent},
{path:"User", component:UserComponent},
{path:"Plan", component:PlanComponent},
{path:"PlanRequest", component:PlanRequestComponent},
{path:"Setting", component:SettingComponent},
 ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    PlanComponent,
    PlanRequestComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
