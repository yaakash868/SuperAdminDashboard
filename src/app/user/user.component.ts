import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../Models/UserModel';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  closeResult = '';
  closeResult1= '';
  closeResult2= '';
  constructor(private modalService: NgbModal, private modalService1: NgbModal, private modalService2: NgbModal) {



  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open1(content1:any) {
    this.modalService1.open(content1, {ariaLabelledBy: 'modal-basic-title',size:'lg', centered: true }).result.then((result) => {
      this.closeResult1 = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult1 = `Dismissed ${this.getDismissReason1(reason)}`;
    });
  }
  open2(content2:any) {
    this.modalService2.open(content2, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult2 = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult2 = `Dismissed ${this.getDismissReason2(reason)}`;
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
  private getDismissReason1(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  private getDismissReason2(reason: any): string {
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
    new UserModel(1,"ajay","ajay@test.com",12,10,"Gold","12/10/2021"),
    new UserModel(2,"vijay","Vijay@test.com",13,18,"Platinum","12/10/2021"),
    new UserModel(3,"Ram","Ram@test.com",14,10,"Silver","12/10/2021"),
    new UserModel(4,"Sham","sham@test.com",15,6,"Gold","12/10/2021"),
    new UserModel(5,"Lucky","Lucky@test.com",16,3,"Silver","12/10/2021"),
  ]
}
