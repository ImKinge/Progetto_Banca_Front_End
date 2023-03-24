import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class DatiBancari{
    public saldoIban: number | undefined;
    public saldoCarta: number | undefined;
    public cartaDiCredito: number |undefined;
    public iban : string | undefined;


}