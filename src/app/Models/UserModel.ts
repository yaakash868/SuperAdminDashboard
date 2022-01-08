export class UserModel {
 public userId:number;

  public name:string;

  public email:string;

  public employeeCount:number;

  public clientCount:number;

  public planId:number;

  public planExpired:string;

  public password:string;

  public status:boolean;

  constructor(
  userId:number,
  name:string,
  email:string,
  employeeCount:number,
  clientCount:number,
  planId:number,
  planexpired:string,
  password:string,
  status:boolean
  )
  {
    this.userId=userId;
    this.name= name;
    this.email=email;
    this.employeeCount=employeeCount;
    this.clientCount=clientCount;
    this.planId=planId;
    this.planExpired=planexpired;
    this.password=password;
    this.status=status;
  }
}
