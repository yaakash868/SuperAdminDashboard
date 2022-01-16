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
  closeResult2 = '';
  PlanList:PlanModel[]=[];
  planDurationList:PlanDurationModel[]=[];
  constructor(private modalService: NgbModal, private modalService1: NgbModal, private modalService2: NgbModal) {
    this.PlanList = <PlanModel[]>JSON.parse(<string>sessionStorage.getItem("PlanList"));
    this.planDurationList = <PlanDurationModel[]>(JSON.parse(<string>sessionStorage.getItem("planDurationList")));
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
  open2(content2:any) {
    this.modalService2.open(content2, {ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
      this.closeResult2 = `Closed with: ${result}`;
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

  PlanRequestIdList:number[]=<number[]>(sessionStorage.getItem("PlanRequestIdList")==null?[]:JSON.parse(<string>sessionStorage.getItem("PlanRequestIdList")));


  //on clicking send plan request
  onSendPlanRequest(id:number){
    this.PlanRequestIdList.push(id);
    sessionStorage.setItem("PlanRequestIdList",JSON.stringify(this.PlanRequestIdList));
  }

  UpdatePlanListGlobally(data:PlanModel[]){
    sessionStorage.setItem("PlanList",JSON.stringify(data));
  }
}
