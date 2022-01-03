import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../Models/UserModel';
import { DateTimeModel } from '../Common/DateTimeModel';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  closeResult = '';
  closeResult1= '';
  closeResult2= '';
  fontColor="black";
  constructor(private modalService: NgbModal, private modalService1: NgbModal, private modalService2: NgbModal) {

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

  }
  userList:UserModel[]=[
    new UserModel(1,"ajay","ajay@test.com",12,10,"Gold","12/10/2021","12345678"),
    new UserModel(2,"vijay","Vijay@test.com",13,18,"Platinum","12/10/2021","erer4344"),
    new UserModel(3,"Ram","Ram@test.com",14,10,"Silver","12/10/2021","434dsfdff"),
    new UserModel(4,"Sham","sham@test.com",15,6,"Gold","12/10/2021","dfs34dfs"),
    new UserModel(5,"Lucky","Lucky@test.com",16,3,"Silver","12/10/2021","fdsfdf34"),
  ]
  onAddUser(data:any){
    console.log("form submitted");
    console.log(data);
    let maxId = 0;
    this.userList.forEach(user=>
      {if(user.UserId>maxId)
        {
          maxId=user.UserId;
        }
    });
    this.userList.push(new UserModel(maxId+1,data.Name,data.Email,0,0,"free",new DateTimeModel().getTodayDate(),data.Password));
    console.log(this.userList);
  }
  onUpdateUser(userData:any,id:number){
    console.log(userData);
    this.userList.forEach(user=>{
      if(user.UserId===id)
      {
        user.Name=userData.Name;
        user.Email=userData.Email;
      }
    })

  }
  onDeleteUser(id:number){
    let i:number = this.userList.findIndex(user=>user.UserId===id);
    console.log(i);
    this.userList.splice(i,1);
    console.log(this.userList);
  }
}
