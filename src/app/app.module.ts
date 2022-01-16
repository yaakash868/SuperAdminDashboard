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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteSettingComponent } from './site-setting/site-setting.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { MailSettingComponent } from './mail-setting/mail-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    PlanComponent,
    PlanRequestComponent,
    SettingComponent,
    SiteSettingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MailSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
