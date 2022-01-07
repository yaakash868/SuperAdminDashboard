export class UserModel {
 public userId:number;

  public name:string;

  public email:string;

  public employeeCount:number;

  public clientCount:number;

  public plan:string;

  public planExpired:string;

  public password:string;

  constructor(
  userId:number,
  name:string,
  email:string,
  employeeCount:number,
  clientCount:number,
  plan:string,
  planexpired:string,
  password:string,
  )
  {
    this.userId=userId;
    this.name= name;
    this.email=email;
    this.employeeCount=employeeCount;
    this.clientCount=clientCount;
    this.plan=plan;
    this.planExpired=planexpired;
    this.password=password;
  }
}
