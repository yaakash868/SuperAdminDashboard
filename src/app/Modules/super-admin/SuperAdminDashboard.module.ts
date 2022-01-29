// import { MailSettingComponent } from './../setting/mail-setting/mail-setting.component';
import { SidebarComponent } from './../../Layout/sidebar/sidebar.component';
import { FooterComponent } from './../../Layout/footer/footer.component';
import { HeaderComponent } from './../../Layout/header/header.component';
import { CommonModule } from '@angular/common';
// import { SiteSettingComponent } from './../setting/site-setting/site-setting.component';
// import { AppRoutingModule } from './../../app-routing.module';
import { SettingComponent } from './../setting/setting.component';
import { PlanRequestComponent } from './../plan-request/plan-request.component';
import { PlanComponent } from './../plan/plan.component';
import { UserComponent } from './../user/user.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { SuperAdminComponent } from './super-admin.component';
import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageTranslateModule } from 'src/app/lang-translate.module';
const route:Routes = [
  {path:"SuperAdminDashboard", component:SuperAdminComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"User", component:UserComponent},
    {path:"Plans", component:PlanComponent},
    {path:"PlanRequest", component:PlanRequestComponent},
    {path:"Setting", component:SettingComponent},
    {path:"**", redirectTo:""}
  ]
  }
   ];

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
//     UserComponent,
//     PlanComponent,
//     PlanRequestComponent,
//     SettingComponent,
//     SiteSettingComponent,
//     MailSettingComponent,
    SuperAdminComponent,
  ],
  imports: [
    RouterModule.forChild(route),
    LanguageTranslateModule,
    CommonModule
  ],
  exports: [
    SuperAdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent],
})
export class SuperAdminDashboardModule { }
