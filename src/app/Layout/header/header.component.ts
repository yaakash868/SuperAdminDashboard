
import { AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
LanguageList:string[]=[];
selectedLanguageId:number = 0;
  constructor() {
    this.LanguageList = <string[]>JSON.parse(<string>sessionStorage.getItem("LanguageList"));

  }

  onSelectLanguage(languageId:number){
    sessionStorage.setItem("SelectedLanguageId",JSON.stringify(languageId));
    this.selectedLanguageId = languageId;
    this.changeStyle();
  }
  ngOnInit(): void {
  }
  getSelectedLanguage():string{
    return this.LanguageList[<number>JSON.parse(<string>sessionStorage.getItem("SelectedLanguageId"))];
  }
  getFlagByLanguageId(id:number){
    return id==0?"flag-icon flag-icon-us":"flag-icon flag-icon-ar";
  }
  getSelectedFlagByLanguageId(id:number){
    return id==0?"flag-icon flag-icon-us mt-1":"flag-icon flag-icon-ar mt-1"
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
}
