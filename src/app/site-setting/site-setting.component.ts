import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-setting',
  templateUrl: './site-setting.component.html',
  styleUrls: ['./site-setting.component.css']
})
export class SiteSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    localStorage.setItem("SiteInfo",JSON.stringify(data));
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
