import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Card {

  public cardNumber: string = "";
  public balance: number = 0;
  public type: string = "";
  public ibanNumber: string = "";
}
