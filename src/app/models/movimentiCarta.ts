import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MovimentiCarta{
    public amount: number |undefined;
    public dateTransaction : Date = new Date();
    public descriptionTransaction: string | undefined;
    public orderer : string = ""
    public beneficiary : string = ""
}
