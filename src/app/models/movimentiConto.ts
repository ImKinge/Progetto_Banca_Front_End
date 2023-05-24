import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MovimentoConto {

  public amount : string = "";
  public dateTransaction :  Date = new Date ();
  public descriptionTransaction : string = "";
  public orderer : string = ""
  public beneficiary : any;

}
