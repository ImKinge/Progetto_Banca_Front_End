import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MovimentoConto{
  public iban: string|undefined;
  public amountIban: number = 0;
  public date:Date|undefined;
  public descriptionTransactional: string ="";
  public fiscalCode: string| undefined;
  public ibanBeneficiary: string="";
  public fiscalCodeBeneficiary: string| undefined;

}
