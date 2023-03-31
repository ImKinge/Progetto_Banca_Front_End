import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MovimentoConto{
  public iban: string|undefined;
  public amountIban: number = 0;
  public date:Date|undefined;
  public descriptionTransactional: string |undefined;
  public fiscalCode: string| undefined;
  public ibanBeneficiary: string| undefined;
  public fiscalCodeBeneficiary: string| undefined;

}
