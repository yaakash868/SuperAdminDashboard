import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { PlanDurationModel,PlanModel } from '../Models/PlanModel';
import { UserModel } from '../Models/UserModel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
totalUsers:number =10;
paidUsers:number= 5;
totalOders:number= 10;
totalOrderAmount:number = 20500.00;
totalPlans:number = 344440.43;

mostPurchasePlan:String = "Gold";
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  constructor() {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: [100,250,150,200,100, 400,350,500],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: false,
          }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019', 'May 2019', 'june 2019', 'july 2019', 'August 2019']
      },
  });
  }


}
