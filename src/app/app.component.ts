import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SuperAdmin';
  CurrentSiteInfo:object = {"SiteTitle":""
                    ,"SiteFooterTitle1":"Terms"
                    ,"SiteFooterLink1":""
                    ,"SiteFooterTitle2":"Services"
                    ,"SiteFooterLink2":""
                    ,"SiteFooterText":"Copyright Midan.sa 2022"
                    ,"SiteLanguage":"English"};
  myimg:string="assets/Images/midanlogo.png";
  constructor() {
    localStorage.setItem("SiteInfo",JSON.stringify(this.CurrentSiteInfo));
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
    return <string>JSON.parse(<string>localStorage.getItem("SiteInfo")).SiteTitle;
  }
  getSiteFooterTitle1():string{
    return <string>JSON.parse(<string>localStorage.getItem("SiteInfo")).SiteFooterTitle1;
  }
  getSiteFooterLink1():string{
    return <string>JSON.parse(<string>localStorage.getItem("SiteInfo")).SiteFooterLink1;
  }
  getSiteFooterTitle2():string{
    return <string>JSON.parse(<string>localStorage.getItem("SiteInfo")).SiteFooterTitle2;
  }
  getSiteFooterLink2():string{
    return <string>JSON.parse(<string>localStorage.getItem("SiteInfo")).SiteFooterLink2;
  }
  getSiteFooterText():string{
    return <string>JSON.parse(<string>localStorage.getItem("SiteInfo")).SiteFooterText;
  }
  getSiteLanguage():string{
    return <string>JSON.parse(<string>localStorage.getItem("SiteInfo")).SiteLanguage;
  }
}
