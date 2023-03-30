import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class DatiBancari{
    public ibanBalance: number|undefined;
    public cardBalance: number|undefined;
    public creditCard: number|undefined;
    public iban : string|undefined;
    public fiscalCode:string|undefined;


}