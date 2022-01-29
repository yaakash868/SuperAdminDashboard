import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TranslateService } from '@ngx-translate/core';
import { PlanModel,PlanDurationModel } from '../../Models/PlanModel';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../../Models/UserModel';
import { DateTimeModel } from '../../Common/DateTimeModel';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  closeResult = '';
  closeResult1= '';
  closeResult2= '';
  closeResult3='';
  fontColor="black";
  planList:PlanModel[]=[];
  userList:UserModel[]=[];
  planDurationList:PlanDurationModel[]=[];
  constructor(private modalService: NgbModal,private ngxLoader:NgxUiLoaderService, private translate:TranslateService ,private modalService1: NgbModal, private modalService2: NgbModal, private modalService3:NgbModal) {
    this.planDurationList = <PlanDurationModel[]>(sessionStorage.getItem("planDurationList")==null?[]:JSON.parse(<string>sessionStorage.getItem("planDurationList")));
    this.planList = <PlanModel[]>(JSON.parse(<string>sessionStorage.getItem("PlanList")));
    this.userList = <UserModel[]>(JSON.parse(<string>sessionStorage.getItem("userList")));
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
    this.modalService2.open(content2, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult2 = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult2 = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open3(content3:any) {
    this.modalService3.open(content3, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult3 = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult3 = `Dismissed ${this.getDismissReason(reason)}`;
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

  ngOnInit(): void {
    this.ngxLoader.start();
    setTimeout(() => {
      this.ngxLoader.stop();
    }, 500);
  }
  onAddUser(data:any){
    console.log("form submitted");
    console.log(data);
    let maxId = 0;
    this.userList.forEach(user=>
      {if(user.userId>maxId)
        {
          maxId=user.userId;
        }
    });
    this.userList.push(new UserModel(maxId+1,data.Name,data.Email,0,0,1,new DateTimeModel().getTodayDate(),data.Password,true));
    console.log(this.userList);

    this.updateUserListSession(this.userList);
  }
  onUpdateUser(userData:any,id:number){
    console.log(userData);
    this.userList.forEach(user=>{
      if(user.userId===id)
      {
        user.name=userData.Name;
        user.email=userData.Email;
      }
    });

    this.updateUserListSession(this.userList);

  }
  onDeleteUser(id:number){
    let i:number = this.userList.findIndex(user=>user.userId===id);
    console.log(i);
    this.userList.splice(i,1);
    console.log(this.userList);

    this.updateUserListSession(this.userList);
  }

  getPlanList(){
    console.log(<PlanModel[]>JSON.parse(<string>sessionStorage.getItem("PlanList")));
    return <PlanModel[]>JSON.parse(<string>sessionStorage.getItem("PlanList"));
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

  getPlanNameById(planId:number):string{
    return (<PlanModel>this.planList.find(x=>x.planId==planId)).planName;
  }
  PlanSelected(planId:number,userId:number){
    this.userList.forEach(user=>{
      if(user.userId == userId){
        user.planId = planId;
      }
    });
    this.updateUserListSession(this.userList);
  }

  updateUserListSession(userList:UserModel[]){
    sessionStorage.setItem("userList",JSON.stringify(userList));
  }

  getClassByUserStatus(status:boolean){
    return status?"":"disabled";
  }

  getUserStatus(status:boolean){
    return status?"Active":"Suspended";
  }
  SuspendResumeUser(userId:number,status:boolean){
    this.userList.forEach(x=>{
      if(x.userId==userId){
        x.status=status;
      }
    });
    this.updateUserListSession(this.userList);
  }
}
