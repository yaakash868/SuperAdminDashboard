import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClient ,HttpClientModule } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";

export function httpLoaderFactory(http:HttpClient){
  return new MultiTranslateHttpLoader(http,[
    {prefix:"../assets/Translate/Layout/Header/",suffix:".json"},
    {prefix:"../assets/Translate/Layout/Footer/",suffix:".json"},
    {prefix:"../assets/Translate/Layout/Sidebar/",suffix:".json"},
    {prefix:"../assets/Translate/Dashboard/",suffix:".json"},
    {prefix:"../assets/Translate/User/",suffix:".json"},
    {prefix:"../assets/Translate/Plan/",suffix:".json"},
    {prefix:"../assets/Translate/PlanRequest/",suffix:".json"},
    {prefix:"../assets/Translate/Settings/",suffix:".json"},
    {prefix:"../assets/Translate/Settings/SiteSetting/",suffix:".json"},
    {prefix:"../assets/Translate/Settings/MailSetting/",suffix:".json"},
  ]);
}
@NgModule({
declarations:[],
imports:[
  CommonModule,
  HttpClientModule,
  TranslateModule.forRoot({
    loader:{
      provide:TranslateLoader,
      useFactory:httpLoaderFactory,
      deps:[HttpClient]
    }
  })
],
exports:[
  HttpClientModule,
  TranslateModule
]
})
export class LanguageTranslateModule{

}
