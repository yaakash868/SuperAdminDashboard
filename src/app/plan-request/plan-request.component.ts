import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { PlanModel, PlanDurationModel } from '../Models/PlanModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plan-request',
  templateUrl: './plan-request.component.html',
  styleUrls: ['./plan-request.component.css']
})
export class PlanRequestComponent implements OnInit {

  planRequestIdList:number[]=[];
  PlanRequestList:PlanModel[]=[];
  planDurationList:PlanDurationModel[]=[];
  closeResult = '';
  planList:PlanModel[]=[];
  constructor(private modalService: NgbModal, private translate:TranslateService ,private modalService1: NgbModal) {
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
  getPlanDurationDescriptionById(id:number):string{
    let desc=""
    this.planDurationList.forEach(pd => {
      if(pd.planDurationId == id){
        desc=pd.planDurationText;
      }
    });
    return desc;
  }
  open(content:any,id:number) {
    this.removePlanRequestById(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open1(content1:any,id:number) {
    this.removePlanRequestById(id);
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  ngOnInit(): void {
    this.planDurationList = <PlanDurationModel[]>(sessionStorage.getItem("planDurationList")==null?[]:JSON.parse(<string>sessionStorage.getItem("planDurationList")));
    this.planRequestIdList = <number[]>(sessionStorage.getItem("PlanRequestIdList")==null?[]:JSON.parse(<string>sessionStorage.getItem("PlanRequestIdList"))).filter(this.onlyUnique);
    this.planList = <PlanModel[]>(sessionStorage.getItem("PlanList")==null?[]:JSON.parse(<string>sessionStorage.getItem("PlanList")));
    console.log("HIII",this.planRequestIdList);
  }
  removePlanRequestById(id:number){
    this.planRequestIdList.splice(this.planRequestIdList.findIndex(id=>id),1);
    // console.log(this.planRequestIdList.findIndex(id));
    sessionStorage.setItem("PlanRequestIdList",JSON.stringify(this.planRequestIdList));
  }

  getPlanRequestList():PlanModel[]{
    this.PlanRequestList = <PlanModel[]>[];
    this.planRequestIdList.forEach(id => {
      this.planList.forEach(plan => {
        if(plan.planId==id){
          this.PlanRequestList.push(plan);
        }
      });
    });
    return this.PlanRequestList;
  }

  onlyUnique(value:number, index:number, self:number[]) {
    return self.indexOf(value) === index;
  }

  checkPlanRequestAvailable():boolean{
    this.getPlanRequestList();
    console.log("plan request list",this.PlanRequestList.length);
    return this.PlanRequestList.length==0?true:false;
  }
}
