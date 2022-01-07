import { Component, OnInit } from '@angular/core';
import { PlanModel, PlanDurationModel } from '../Models/PlanModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plan-request',
  templateUrl: './plan-request.component.html',
  styleUrls: ['./plan-request.component.css']
})
export class PlanRequestComponent implements OnInit {

  planRequestIdList:PlanModel[]=[];
  planDurationList:PlanDurationModel[]=[];
  closeResult = '';

  constructor(private modalService: NgbModal, private modalService1: NgbModal) {

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
    this.planDurationList = <PlanDurationModel[]>(localStorage.getItem("planDurationList")==null?[]:JSON.parse(<string>localStorage.getItem("planDurationList")));
    this.planRequestIdList = <PlanModel[]>(localStorage.getItem("PlanRequestList")==null?[]:JSON.parse(<string>localStorage.getItem("PlanRequestList")));
    console.log("HIII",this.planRequestIdList);
  }
  removePlanRequestById(id:any){
    this.planRequestIdList.splice(this.planRequestIdList.findIndex(x=>x.planId==id),1);
    localStorage.setItem("PlanRequestList",JSON.stringify(this.planRequestIdList));
  }
}
