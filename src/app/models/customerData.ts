import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class CustomerData {

  public fiscalCode: string = ""
  public infoPhone: number = 0
  public name: string = ""
  public surname: string = ""
  public dateOfBirth: Date = new Date()
  public email: string = ""
  public address: string = ""


}
