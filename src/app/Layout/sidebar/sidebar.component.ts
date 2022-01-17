import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  img:string ="assets/Images/midanlogo.png";

  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
  }
}
