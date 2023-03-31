import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MovimentiCarta{
    public amountCard: number |undefined;
    public creditCard: number|undefined;
    public date : Date| undefined;
    public descriptionTransaction: string | undefined;
    public fiscalCode : String | undefined;
}
