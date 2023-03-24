import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MovimentoConto{
    public id:number|undefined;
    public movimentiCarta:number|undefined;
}