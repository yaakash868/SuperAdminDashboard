
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
  constructor(public translate:TranslateService) {
    this.LanguageList = <string[]>JSON.parse(<string>sessionStorage.getItem("LanguageList"));
    translate.addLangs(this.LanguageList);
    this.languageChanged();
  }

  onSelectLanguage(languageId:number){
    sessionStorage.setItem("SelectedLanguageId",JSON.stringify(languageId));
    this.selectedLanguageId = languageId;
    this.languageChanged();
    this.changeStyle();
  }
  ngOnInit(): void {
  }
  getSelectedLanguage():string{
    return this.LanguageList[<number>JSON.parse(<string>sessionStorage.getItem("SelectedLanguageId"))];
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
      l.id="ltrStyle";
      l.href="../../../assets/css/demo2/style.css";
      $('#rtlStyle').remove();
      $("html").attr("dir","ltr");
    }
    else{
      l.id="rtlStyle";
      l.href="../../../assets/css/demo2/style-rtl.css";
      $('#ltrStyle').remove();
      $("html").attr("dir","rtl");
    }
    document.head.appendChild(l);
  }

  languageChanged(){
    this.browserLang=this.getSelectedLanguage();
    this.translate.use(this.browserLang.match(/English|Arabic/)?this.browserLang:'English');
  }
}
