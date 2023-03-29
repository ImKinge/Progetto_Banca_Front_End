import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MovimentiCarta{
    public description: string = "";
    public amount: number |undefined;
    public id: number|undefined;
}
