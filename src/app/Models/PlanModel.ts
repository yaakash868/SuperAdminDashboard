export class PlanModel {

  private _planId:number;

  get PlanId():number{
    return this._planId
  }
  set PlanId(planId:number){
    this._planId=planId;
  }

  private _planName:string;
  get PlanName():string{
    return this._planName;
  }
  set PlanName(planName:string){
    this._planName=planName;
  }

   private _price:number;
   get Price():number{
    return this._price;
  }
  set Price(price:number){
    this._price=price;
  }
  private _duration:number;

  get Duration():number{
    return this._duration;
  }
  set Duration(duration:number){
    this._duration=duration;
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
    this._clientCount=clientCount;
  }

  private _imageUrl:string;
  get ImageUrl():string{
    return this._imageUrl;
  }
  set ImageUrl(imageUrl:string){
    this._imageUrl=imageUrl;
  }

  private _description:string;
  get Description():string{
    return this._description;
  }
  set Description(description:string){
    this._description=description;
  }

  private _visibleDescription:boolean;
  get VisibleDescription():boolean{
    return this._visibleDescription;
  }
  set VisibleDescription(visibleDescription:boolean){
    this._visibleDescription=visibleDescription;
  }

   constructor(
    planId:number,
    planName:string,
    price:number,
    duration:number,
    employeeCount:number,
    clientCount:number,
    imageUrl:string,
    description:string,
    visibleDescription:boolean
   )
   {
     this._planId=planId;
     this._planName=planName;
     this._price=price;
     this._duration=duration;
     this._employeeCount=employeeCount;
     this._clientCount=clientCount;
     this._imageUrl=imageUrl;
     this._description=description;
     this._visibleDescription=visibleDescription;
   }
 }


export class PlanDurationModel{
  private _PlanDurationId:number;
  private _PlanDurationText:string;

  get PlanDurationId(){
    return this._PlanDurationId;
  }
  get PlanDurationText(){
    return this._PlanDurationText;
  }

  constructor(
    PlanDurationId:number,
    PlanDurationText:string
  ){
    this._PlanDurationId=PlanDurationId;
    this._PlanDurationText=PlanDurationText;
  }
}
