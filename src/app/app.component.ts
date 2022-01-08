import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { PlanDurationModel, PlanModel } from './Models/PlanModel';
import { UserModel } from './Models/UserModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SuperAdmin';
  planDurationList=[
    new PlanDurationModel(1,"Unlimited"),
    new PlanDurationModel(2,"Year"),
    new PlanDurationModel(3,"Month")
  ];
  userList:UserModel[]=[
    new UserModel(1,"ajay","ajay@test.com",12,10,3,"12/10/2021","12345678",false),
    new UserModel(2,"vijay","Vijay@test.com",13,18,2,"12/10/2021","erer4344",true),
    new UserModel(3,"Ram","Ram@test.com",14,10,4,"12/10/2021","434dsfdff",true),
    new UserModel(4,"Sham","sham@test.com",15,6,4,"12/10/2021","dfs34dfs",true),
    new UserModel(5,"Lucky","Lucky@test.com",16,3,4,"12/10/2021","fdsfdf34",true),
  ]
  PlanList:PlanModel[]=[
    new PlanModel(1,"Free Plan",0,1,12,10,"assets/Images/Free.jpg","",false),
    new PlanModel(2,"Platinum",5000,2,500,150,"assets/Images/Platinum.jpg","Platinum Test Plan",true),
    new PlanModel(3,"Gold",4000,2,400,50,"assets/Images/Gold.png","Gold Test Plan",true),
    new PlanModel(4,"Silver",100,3,25,25,"assets/Images/Silver.png","Silver Test Plan",true),
  ]
  CurrentSiteInfo:object = {"SiteTitle":""
                    ,"SiteFooterTitle1":"Terms"
                    ,"SiteFooterLink1":""
                    ,"SiteFooterTitle2":"Services"
                    ,"SiteFooterLink2":""
                    ,"SiteFooterText":"Copyright Midan.sa 2022"
                    ,"SiteLanguage":"English"};
  myimg:string="assets/Images/midanlogo.png";
  constructor() {

    sessionStorage.setItem("planDurationList",JSON.stringify(<PlanDurationModel[]>this.planDurationList));
    sessionStorage.setItem("PlanList",JSON.stringify(<PlanModel[]>this.PlanList));
    sessionStorage.setItem("userList",JSON.stringify(this.userList));
    sessionStorage.setItem("SiteInfo",JSON.stringify(this.CurrentSiteInfo));
  }
  ngOnInit(): void {
      $(function()
      {
        $('#hamburger').on('click', function(){
          $('#sidebar, #content').toggleClass('active');
        });
      });
  }
  getSiteTitleText():string{
    return <string>JSON.parse(<string>sessionStorage.getItem("SiteInfo")).SiteTitle;
  }
  getSiteFooterTitle1():string{
    return <string>JSON.parse(<string>sessionStorage.getItem("SiteInfo")).SiteFooterTitle1;
  }
  getSiteFooterLink1():string{
    return <string>JSON.parse(<string>sessionStorage.getItem("SiteInfo")).SiteFooterLink1;
  }
  getSiteFooterTitle2():string{
    return <string>JSON.parse(<string>sessionStorage.getItem("SiteInfo")).SiteFooterTitle2;
  }
  getSiteFooterLink2():string{
    return <string>JSON.parse(<string>sessionStorage.getItem("SiteInfo")).SiteFooterLink2;
  }
  getSiteFooterText():string{
    return <string>JSON.parse(<string>sessionStorage.getItem("SiteInfo")).SiteFooterText;
  }
  getSiteLanguage():string{
    return <string>JSON.parse(<string>sessionStorage.getItem("SiteInfo")).SiteLanguage;
  }
}
