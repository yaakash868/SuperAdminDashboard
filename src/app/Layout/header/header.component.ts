import { NgxUiLoaderService } from 'ngx-ui-loader';

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
LanguageList:string[]=[];
browserLang='';
selectedLanguageId:number = 0;
  constructor(private translate:TranslateService, private ngxLoader:NgxUiLoaderService) {
    this.LanguageList = <string[]>JSON.parse(<string>sessionStorage.getItem("LanguageList"));
    translate.addLangs(this.LanguageList);
    this.languageChanged();
  }

  onSelectLanguage(languageId:number){
    if(this.selectedLanguageId != languageId)
    {
    this.ngxLoader.start();
    setTimeout(() => {
      sessionStorage.setItem("SelectedLanguageId",JSON.stringify(languageId));
      this.selectedLanguageId = languageId;
      this.languageChanged();
      this.changeStyle();
      this.ngxLoader.stop();
    }, 1000);
    }
  }
  ngOnInit(): void {
  }
  getSelectedLanguage():string{
    return this.LanguageList[<number>JSON.parse(<string>sessionStorage.getItem("SelectedLanguageId"))];
  }
  getSelectedLanguageFromJSON(){
    let language='';
    this.translate.get(['header']).subscribe(translations=>{
      language=translations.header.LanguageList[this.selectedLanguageId];
      console.log(translations);
    });
    return language;
  }
  getFlagByLanguageId(id:number){
    return id==0?"flag-icon flag-icon-us":"flag-icon flag-icon-pk";
  }
  getSelectedFlagByLanguageId(id:number){
    return id==0?"flag-icon flag-icon-us mt-1":"flag-icon flag-icon-pk mt-1"
  }
  ngAfterViewInit(): void {
    this.changeStyle();
  }
  changeStyle(){
    var l = document.createElement('link');
    l.rel="stylesheet";
    console.log("Style changed");

    if(this.selectedLanguageId==0){
      l.className="ltrStyle";
      l.href="../../../assets/css/demo2/style.css";
      $('.rtlStyle').remove();
      $("html").attr("dir","ltr");
    }
    else{
      l.className="rtlStyle";
      l.href="../../../assets/css/demo2/style-rtl.css";
      $('.ltrStyle').remove();
      $("html").attr("dir","rtl");
    }

    document.head.appendChild(l);
  }

  languageChanged(){
    this.browserLang=this.getSelectedLanguage();
    this.translate.use(this.browserLang.match(/English|Arabic/)?this.browserLang:'English');
  }
}
