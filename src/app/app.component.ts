import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SuperAdmin';
  myimg:string="assets/Images/midanlogo.png";
  constructor() {

  }
  ngOnInit(): void {
      $(function()
      {
        $('#hamburger').on('click', function(){
          $('#sidebar, #content').toggleClass('active');
        });
      });
  }
}
