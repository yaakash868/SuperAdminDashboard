import { RegistrationComponent } from './registration/registration.component';
import { SuperAdminDashboardModule } from './Modules/super-admin/SuperAdminDashboard.module';
import { LanguageTranslateModule } from './lang-translate.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { UserComponent } from './Modules/user/user.component';
import { PlanComponent } from './Modules/plan/plan.component';
import { PlanRequestComponent } from './Modules/plan-request/plan-request.component';
import { SettingComponent } from './Modules/setting/setting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteSettingComponent } from './Modules/setting/site-setting/site-setting.component';
import { MailSettingComponent } from './Modules/setting/mail-setting/mail-setting.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    PlanComponent,
    PlanRequestComponent,
    SettingComponent,
    SiteSettingComponent,
    MailSettingComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    LanguageTranslateModule,
    SuperAdminDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
