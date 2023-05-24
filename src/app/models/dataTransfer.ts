import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class DataTransfer {

  public ibanBeneficiary : string = ""
  public name : string = ""
  public surname : string = ""
  public amount : number = 0
  public description : string = ""

}
