import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PlanModel,PlanDurationModel } from '../Models/PlanModel';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  closeResult = '';
  closeResult1 = '';
  Free = "assets/Images/Free.jpg";
  planDurationList=[
    new PlanDurationModel(1,"Unlimited"),
    new PlanDurationModel(2,"Year"),
    new PlanDurationModel(3,"Month")
  ]
  constructor(private modalService: NgbModal, private modalService1: NgbModal) { }
  ngOnInit(): void {
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("first clicked");
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log("second clicked");
    });
  }
  open1(content1:any) {
    this.modalService1.open(content1, {ariaLabelledBy: 'modal-basic-title',size:'lg', centered: true }).result.then((result) => {
      this.closeResult1 = `Closed with: ${result}`;
      console.log("first clicked");
    }, (reason) => {
      this.closeResult1 = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  PlanList:PlanModel[]=[
    new PlanModel(1,"Free Plan",0,1,12,10,"assets/Images/Free.jpg","",false),
    new PlanModel(2,"Platinum",5000,2,500,150,"assets/Images/Platinum.jpg","Platinum Test Plan",true),
    new PlanModel(3,"Gold",4000,2,400,50,"assets/Images/Gold.png","Gold Test Plan",true),
    new PlanModel(4,"Silver",100,3,25,25,"assets/Images/Silver.png","Silver Test Plan",true),
  ]

  //while adding plan
  onAddPlan(data:any){
    let maxId = 0;
    console.log(data);
    this.PlanList.forEach(plan => {
      if(plan.PlanId>maxId){
        maxId=plan.PlanId;
      }
    });
    this.PlanList.push(new PlanModel(maxId+1
                                    ,data.PlanName
                                    ,data.Price
                                    ,data.Duration
                                    ,data.EmployeeCount
                                    ,data.ClientCount
                                    ,data.ImageUrl
                                    ,data.Description
                                    ,true));
  }

  //while getting plan duration description
  getPlanDurationDescriptionById(id:number):string{
    let desc=""
    this.planDurationList.forEach(pd => {
      if(pd.PlanDurationId == id){
        desc=pd.PlanDurationText;
      }
    });
    return desc;
  }

  //while editing user
  onUpdateUser(data:any,id:number){
    let plan = this.PlanList.find(x=> x.PlanId == id);
    this.PlanList.forEach(p => {
      if(p.PlanId==id){
        p.ClientCount=data.ClientCount;
        p.Description=data.Description;
        p.Duration = data.Duration;
        p.EmployeeCount = data.EmployeeCount;
        p.ImageUrl = data.ImageUrl;
        p.PlanName = data.PlanName;
        p.Price = data.Price;
      }
    });
  }
}
