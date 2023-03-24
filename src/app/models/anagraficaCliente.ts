import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class AnagraficaCliente {
    public id =null;
    public nome = null;
    public cognome = null;
    public dataDiNascita = null;
    public email = null;
    public recapitoTelefonico = null;
    public indirizzo = null;

}