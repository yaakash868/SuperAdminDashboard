import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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

  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
  }
}
