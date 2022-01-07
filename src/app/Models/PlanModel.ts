export class PlanModel {
  public planId:number;
  public planName:string;
  public price:number;
  public duration:number;
  public employeeCount:number;
  public clientCount:number;
  public imageUrl:string;
  public description:string;
  public visibleDescription:boolean;

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
     this.planId=planId;
     this.planName=planName;
     this.price=price;
     this.duration=duration;
     this.employeeCount=employeeCount;
     this.clientCount=clientCount;
     this.imageUrl=imageUrl;
     this.description=description;
     this.visibleDescription=visibleDescription;
   }
 }

export class PlanDurationModel{
  public planDurationId:number;
  public planDurationText:string;

  constructor(
    PlanDurationId:number,
    PlanDurationText:string
  ){
    this.planDurationId=PlanDurationId;
    this.planDurationText=PlanDurationText;
  }
}
