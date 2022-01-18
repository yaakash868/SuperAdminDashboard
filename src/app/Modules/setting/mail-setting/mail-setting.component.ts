import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-setting',
  templateUrl: './mail-setting.component.html',
  styleUrls: ['./mail-setting.component.css']
})
export class MailSettingComponent implements OnInit {

  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
  }

}
