import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class CurrentAccount {

  public ibanNumber: string = ""
  public balance: number = 0
  public customerData: string = ""
}
