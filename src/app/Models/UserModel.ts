export class UserModel {
 private _userId:number;

 get UserId():number{
   return this._userId;
 }
 set UserId(userId:number){
   this._userId=userId;
 }
  private _name:string;
  get Name():string{
    return this._name;
  }
  set Name(name:string){
    this._name=name;
  }

  private _email:string;
  get Email():string{
    return this._email;
  }
  set Email(email:string){
    this._email=email;
  }
  
  private _employeeCount:number;
  get EmployeeCount():number{
    return this._employeeCount;
  }
  set EmployeeCount(employeeCount:number){
    this._employeeCount=employeeCount;
  }

  private _clientCount:number;
  get ClientCount():number{
    return this._clientCount;
  }
  set ClientCount(clientCount:number){
    this._clientCount = clientCount;
  }

  private _plan:string;
  get Plan():string{
    return this._plan;
  }
  set Plan(plan:string){
    this._plan = plan;
  }

  private _planexpired:string;
  get PlanExpired():string{
    return this._planexpired;
  }
  set PlanExpired(planExpired:string){
    this._planexpired = planExpired;
  }

  private _password:string;
  get Password():string{
    return this._password;
  }
  set Password(password:string){
    this._password = password;
  }


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
    this._userId=userId;
    this._name= name;
   this._email=email;
    this._employeeCount=employeeCount;
   this._clientCount=clientCount;
    this._plan=plan;
    this._planexpired=planexpired;
    this._password=password;
  }
}
