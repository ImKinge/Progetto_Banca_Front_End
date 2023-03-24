import{Injectable} from '@angular/core';
import { AnagraficaCliente } from './anagraficaCliente';

@Injectable({
    providedIn:'root'
})
export class DatiUtente{
    public id: number | undefined;
    
    public codiceFiscale : AnagraficaCliente["id"] | undefined;
    


}