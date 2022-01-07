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

  planDurationList=[
    new PlanDurationModel(1,"Unlimited"),
    new PlanDurationModel(2,"Year"),
    new PlanDurationModel(3,"Month")
  ];
  constructor(private modalService: NgbModal, private modalService1: NgbModal) {
    localStorage.setItem("PlanList",JSON.stringify(<PlanModel[]>this.PlanList));
    localStorage.setItem("planDurationList",JSON.stringify(<PlanDurationModel[]>this.planDurationList));
   }
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
      if(plan.planId>maxId){
        maxId=plan.planId;
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
    this.UpdatePlanListGlobally(this.PlanList);
  }

  //while getting plan duration description
  getPlanDurationDescriptionById(id:number):string{
    let desc=""
    this.planDurationList.forEach(pd => {
      if(pd.planDurationId == id){
        desc=pd.planDurationText;
      }
    });
    return desc;
  }

  //while editing user
  onUpdatePlan(data:any,id:number){
    this.PlanList.forEach(p => {
      if(p.planId==id){
        p.clientCount = data.ClientCount;
        p.description = data.Description;
        p.duration = data.Duration;
        p.employeeCount = data.EmployeeCount;
        p.imageUrl = data.ImageUrl;
        p.planName = data.PlanName;
        p.price = data.Price;
      }
    });
    this.UpdatePlanListGlobally(this.PlanList);
  }

  PlanRequestIdList:PlanModel[]=<PlanModel[]>(localStorage.getItem("PlanRequestList")==null?[]:JSON.parse(<string>localStorage.getItem("PlanRequestList")));


  //on clicking send plan request
  onSendPlanRequest(id:number){

    this.PlanRequestIdList.push(<PlanModel>this.PlanList.find(x=>x.planId == id));
    localStorage.setItem("PlanRequestList",JSON.stringify(this.PlanRequestIdList));
  }

  UpdatePlanListGlobally(data:PlanModel[]){
    localStorage.setItem("PlanList",JSON.stringify(data));
  }
}
