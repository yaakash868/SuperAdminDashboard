export class UserModel {
  userID:number=0;
  Name:string="";
  Email:string="";
  employeeCount:number=0;
  ClientCount:number=0;
  Plan:string="";
  Planexpired:string="";

  constructor(
    userID:number,
  Name:string,
  Email:string,
  employeeCount:number,
  ClientCount:number,
  Plan:string,
  Planexpired:string
  )
  {
    this.userID=userID;
    this.Name= Name;
   this.Email=Email;
    this.employeeCount=employeeCount;
   this.ClientCount=ClientCount;
    this.Plan=Plan;
    this.Planexpired=Planexpired
  }
}
