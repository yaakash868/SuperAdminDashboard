import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { PlanDurationModel,PlanModel } from '../Models/PlanModel';
import { UserModel } from '../Models/UserModel';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct,NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
model: NgbDateStruct;
totalUsers:number =10;
paidUsers:number= 5;
totalOders:number= 10;
totalOrderAmount:number = 20500.00;
totalPlans:number = 344440.43;

mostPurchasePlan:String = "Gold";
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  constructor(private calender:NgbCalendar,private service:TranslateService) {
    this.model = this.calender.getToday();
  }

  SelectToday(){
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    var colors = {
      primary        : "#6571ff",
      secondary      : "#7987a1",
      success        : "#05a34a",
      info           : "#66d1d1",
      warning        : "#fbbc06",
      danger         : "#ff3366",
      light          : "#e9ecef",
      dark           : "#060c17",
      muted          : "#7987a1",
      gridBorder     : "rgba(77, 138, 240, .15)",
      bodyColor      : "#b8c3d9",
      cardBg         : "#0c1427"
    }
    if($('#customersChart2').length) {
      var options1 = {
        chart: {
          type: "line",
          height: 60,
          sparkline: {
            enabled: !0
          }
        },
        series: [{
          name: '',
          data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843]
        }],
        xaxis: {
          type: 'datetime',
          categories: ["Jan 01 2021", "Jan 02 2021", "Jan 03 2021", "Jan 04 2021", "Jan 05 2021", "Jan 06 2021", "Jan 07 2021", "Jan 08 2021", "Jan 09 2021", "Jan 10 2021", "Jan 11 2021",],
        },
        stroke: {
          width: 2,
          curve: "smooth"
        },
        markers: {
          size: 0
        },
        colors: [colors.primary],
      };
      new ApexCharts(document.querySelector("#customersChart2"),options1).render();
    }

    if($('#customersChart1').length) {
      var options1 = {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: !0
          }
        },
        series: [{
          name: '',
          data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843]
        }],
        xaxis: {
          type: 'datetime',
          categories: ["Jan 01 2021", "Jan 02 2021", "Jan 03 2021", "Jan 04 2021", "Jan 05 2021", "Jan 06 2021", "Jan 07 2021", "Jan 08 2021", "Jan 09 2021", "Jan 10 2021", "Jan 11 2021",],
        },
        stroke: {
          width: 2,
          curve: "smooth"
        },
        markers: {
          size: 0
        },
        colors: [colors.primary],
      };
      new ApexCharts(document.querySelector("#customersChart1"),options1).render();
    }

    if($('#ordersChart1').length) {
      var options2 = {
        chart: {
          type: "bar",
          height: 60,
          sparkline: {
            enabled: !0
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            columnWidth: "60%"
          }
        },
        colors: [colors.primary],
        series: [{
          name: '',
          data: [36, 77, 52, 90, 74, 35, 55, 23, 47, 10, 63]
        }],
        xaxis: {
          type: 'datetime',
          categories: ["Jan 01 2021", "Jan 02 2021", "Jan 03 2021", "Jan 04 2021", "Jan 05 2021", "Jan 06 2021", "Jan 07 2021", "Jan 08 2021", "Jan 09 2021", "Jan 10 2021", "Jan 11 2021",],
        },
      };
      new ApexCharts(document.querySelector("#ordersChart1"),options2).render();
    }

    if($('#ordersChart2').length) {
      var options2 = {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: !0
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            columnWidth: "60%"
          }
        },
        colors: [colors.primary],
        series: [{
          name: '',
          data: [36, 77, 52, 90, 74, 35, 55, 23, 47, 10, 63]
        }],
        xaxis: {
          type: 'datetime',
          categories: ["Jan 01 2021", "Jan 02 2021", "Jan 03 2021", "Jan 04 2021", "Jan 05 2021", "Jan 06 2021", "Jan 07 2021", "Jan 08 2021", "Jan 09 2021", "Jan 10 2021", "Jan 11 2021",],
        },
      };
      new ApexCharts(document.querySelector("#ordersChart2"),options2).render();
    }

    if($('#growthChart1').length) {
      var options3 = {
        chart: {
          type: "line",
          height: 60,
          sparkline: {
            enabled: !0
          }
        },
        series: [{
          name: '',
          data: [41, 45, 44, 46, 52, 54, 43, 74, 82, 82, 89]
        }],
        xaxis: {
          type: 'datetime',
          categories: ["Jan 01 2021", "Jan 02 2021", "Jan 03 2021", "Jan 04 2021", "Jan 05 2021", "Jan 06 2021", "Jan 07 2021", "Jan 08 2021", "Jan 09 2021", "Jan 10 2021", "Jan 11 2021",],
        },
        stroke: {
          width: 2,
          curve: "smooth"
        },
        markers: {
          size: 0
        },
        colors: [colors.primary],
      };
      new ApexCharts(document.querySelector("#growthChart1"),options3).render();
    }

    if($('#growthChart2').length) {
      var options3 = {
        chart: {
          type: "line",
          height: 60,
          sparkline: {
            enabled: !0
          }
        },
        series: [{
          name: '',
          data: [41, 45, 44, 46, 52, 54, 43, 74, 82, 82, 89]
        }],
        xaxis: {
          type: 'datetime',
          categories: ["Jan 01 2021", "Jan 02 2021", "Jan 03 2021", "Jan 04 2021", "Jan 05 2021", "Jan 06 2021", "Jan 07 2021", "Jan 08 2021", "Jan 09 2021", "Jan 10 2021", "Jan 11 2021",],
        },
        stroke: {
          width: 2,
          curve: "stepline"
        },
        markers: {
          size: 0
        },
        colors: [colors.primary],
      };
      new ApexCharts(document.querySelector("#growthChart2"),options3).render();
    }

    var revenueChartData = [
      49.33,
      48.79,
      50.61,
      53.31,
      54.78,
      53.84,
      54.68,
      56.74,
      56.99,
      56.14,
      56.56,
      60.35,
      58.74,
      61.44,
      61.11,
      58.57,
      54.72,
      52.07,
      51.09,
      47.48,
      48.57,
      48.99,
      53.58,
      50.28,
      46.24,
      48.61,
      51.75,
      51.34,
      50.21,
      54.65,
      52.44,
      53.06,
      57.07,
      52.97,
      48.72,
      52.69,
      53.59,
      58.52,
      55.10,
      58.05,
      61.35,
      57.74,
      60.27,
      61.00,
      57.78,
      56.80,
      58.90,
      62.45,
      58.75,
      58.40,
      56.74,
      52.76,
      52.30,
      50.56,
      55.40,
      50.49,
      52.49,
      48.79,
      47.46,
      43.31,
      38.96,
      34.73,
      31.03,
      32.63,
      36.89,
      35.89,
      32.74,
      33.20,
      30.82,
      28.64,
      28.44,
      27.73,
      27.75,
      25.96,
      24.38,
      21.95,
      22.08,
      23.54,
      27.30,
      30.27,
      27.25,
      29.92,
      25.14,
      23.09,
      23.79,
      23.46,
      27.99,
      23.21,
      23.91,
      19.21,
      15.13,
      15.08,
      11.00,
      9.20,
      7.47,
      11.64,
      15.76,
      13.99,
      12.59,
      13.53,
      15.01,
      13.95,
      13.23,
      18.10,
      20.63,
      21.06,
      25.37,
      25.32,
      20.94,
      18.75,
      15.38,
      14.56,
      17.94,
      15.96,
      16.35,
      14.16,
      12.10,
      14.84,
      17.24,
      17.79,
      14.03,
      18.65,
      18.46,
      22.68,
      25.08,
      28.18,
      28.03,
      24.11,
      24.28,
      28.23,
      26.24,
      29.33,
      26.07,
      23.92,
      28.82,
      25.14,
      21.79,
      23.05,
      20.71,
      29.72,
      30.21,
      32.56,
      31.46,
      33.69,
      30.05,
      34.20,
      36.93,
      35.50,
      34.78,
      36.97
    ];

    var revenueChartCategories = [
      "Jan 01 2021", "Jan 02 2021", "jan 03 2021", "Jan 04 2021", "Jan 05 2021", "Jan 06 2021", "Jan 07 2021", "Jan 08 2021", "Jan 09 2021", "Jan 10 2021", "Jan 11 2021", "Jan 12 2021", "Jan 13 2021", "Jan 14 2021", "Jan 15 2021", "Jan 16 2021", "Jan 17 2021", "Jan 18 2021", "Jan 19 2021", "Jan 20 2021","Jan 21 2021", "Jan 22 2021", "Jan 23 2021", "Jan 24 2021", "Jan 25 2021", "Jan 26 2021", "Jan 27 2021", "Jan 28 2021", "Jan 29 2021", "Jan 30 2021", "Jan 31 2021",
      "Feb 01 2021", "Feb 02 2021", "Feb 03 2021", "Feb 04 2021", "Feb 05 2021", "Feb 06 2021", "Feb 07 2021", "Feb 08 2021", "Feb 09 2021", "Feb 10 2021", "Feb 11 2021", "Feb 12 2021", "Feb 13 2021", "Feb 14 2021", "Feb 15 2021", "Feb 16 2021", "Feb 17 2021", "Feb 18 2021", "Feb 19 2021", "Feb 20 2021","Feb 21 2021", "Feb 22 2021", "Feb 23 2021", "Feb 24 2021", "Feb 25 2021", "Feb 26 2021", "Feb 27 2021", "Feb 28 2021",
      "Mar 01 2021", "Mar 02 2021", "Mar 03 2021", "Mar 04 2021", "Mar 05 2021", "Mar 06 2021", "Mar 07 2021", "Mar 08 2021", "Mar 09 2021", "Mar 10 2021", "Mar 11 2021", "Mar 12 2021", "Mar 13 2021", "Mar 14 2021", "Mar 15 2021", "Mar 16 2021", "Mar 17 2021", "Mar 18 2021", "Mar 19 2021", "Mar 20 2021","Mar 21 2021", "Mar 22 2021", "Mar 23 2021", "Mar 24 2021", "Mar 25 2021", "Mar 26 2021", "Mar 27 2021", "Mar 28 2021", "Mar 29 2021", "Mar 30 2021", "Mar 31 2021",
      "Apr 01 2021", "Apr 02 2021", "Apr 03 2021", "Apr 04 2021", "Apr 05 2021", "Apr 06 2021", "Apr 07 2021", "Apr 08 2021", "Apr 09 2021", "Apr 10 2021", "Apr 11 2021", "Apr 12 2021", "Apr 13 2021", "Apr 14 2021", "Apr 15 2021", "Apr 16 2021", "Apr 17 2021", "Apr 18 2021", "Apr 19 2021", "Apr 20 2021","Apr 21 2021", "Apr 22 2021", "Apr 23 2021", "Apr 24 2021", "Apr 25 2021", "Apr 26 2021", "Apr 27 2021", "Apr 28 2021", "Apr 29 2021", "Apr 30 2021",
      "May 01 2021", "May 02 2021", "May 03 2021", "May 04 2021", "May 05 2021", "May 06 2021", "May 07 2021", "May 08 2021", "May 09 2021", "May 10 2021", "May 11 2021", "May 12 2021", "May 13 2021", "May 14 2021", "May 15 2021", "May 16 2021", "May 17 2021", "May 18 2021", "May 19 2021", "May 20 2021","May 21 2021", "May 22 2021", "May 23 2021", "May 24 2021", "May 25 2021", "May 26 2021", "May 27 2021", "May 28 2021", "May 29 2021", "May 30 2021",
    ]


    if ($('#revenueChart1').length) {
      var lineChartOptions = {
        chart: {
          type: "line",
          height: '400',
          parentHeightOffset: 0,
          foreColor: colors.bodyColor,
          background: colors.cardBg,
          toolbar: {
            show: false
          },
        },
        theme: {
          mode: 'light'
        },
        tooltip: {
          theme: 'light'
        },
        colors: [colors.primary, colors.danger, colors.warning],
        grid: {
          padding: {
            bottom: -4,
          },
          borderColor: colors.gridBorder,
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        series: [
          {
            name: "Revenue",
            data: revenueChartData
          },
        ],
        xaxis: {
          type: "datetime",
          categories: revenueChartCategories,
          lines: {
            show: true
          },
          axisBorder: {
            color: colors.gridBorder,
          },
          axisTicks: {
            color: colors.gridBorder,
          },
          crosshairs: {
            stroke: {
              color: colors.secondary,
            },
          },
        },
        yaxis: {
          title: {
            text: 'Revenue ( $1000 x )',
            style:{
              size: 9,
              color: colors.muted
            }
          },
          tickAmount: 4,
          tooltip: {
            enabled: true
          },
          crosshairs: {
            stroke: {
              color: colors.secondary,
            },
          },
        },
        markers: {
          size: 0,
        },
        stroke: {
          width: 2,
          curve: "straight",
        },
      };
      var apexLineChart = new ApexCharts(document.querySelector("#revenueChart1"), lineChartOptions);
      apexLineChart.render();
    }






  //   this.canvas = this.mychart.nativeElement;
  //   this.ctx = this.canvas.getContext('2d');

  //   new Chart(this.ctx, {
  //     type: 'line',
  //     data: {
  //         datasets: [{
  //             label: 'Current Vallue',
  //             data: [100,250,150,200,100, 400,350,500],
  //             backgroundColor: "rgb(115 185 243 / 65%)",
  //             borderColor: "#007ee7",
  //             fill: false,
  //         }],
  //         labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019', 'May 2019', 'june 2019', 'july 2019', 'August 2019']
  //     },
  // });
  }


}
