import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class DatiUtente{
    public userCode: number=0;
    public pin:number =0;
    public fiscalCode:string="";
    
}
