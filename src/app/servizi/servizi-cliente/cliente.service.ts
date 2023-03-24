import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AnagraficaCliente } from 'src/app/models/anagraficaCliente';
import { DatiUtente } from 'src/app/models/datiUtente';
import { DatiBancari } from 'src/app/models/datiBancari';
import { MovimentiCarta } from 'src/app/models/movimentiCarta';
import { MovimentoConto } from 'src/app/models/movimentiConto';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrlCliente = 'http://localhost:8080/cliente';
  baseUrlConto ="http://localhost:8080/dati-bancari";

  constructor(private http: HttpClient) { }



  //chiamate cliente
  saveCliente(body:any) {
    return this.http.post(this.baseUrlCliente + '/save', body);
  }
 /* updateCliente(body:any){
    return this.http.put(this.baseUrlCliente+'/update', body);
  }
  deleteClinte(codiceFiscale:any){
    return this.http.delete(this.baseUrlCliente+'/delete/'+codiceFiscale);
  }
  findProprietarioById(codiceFiscale: any) {
    return this.http.get(this.baseUrlCliente + '/find-proprietario/' + codiceFiscale);
  }
  findUtenteById(codiceFiscale:any){
    return this.http.get(this.baseUrlCliente+'/find-utente/'+codiceFiscale);
  }
  findDatiById(codiceFiscale:any){
    return this.http.get(this.baseUrlConto+'/conto-by-codicefiscale/'+codiceFiscale);
  }
  findContoByIban(iban:any){
    return this.http.get(this.baseUrlConto+'/conto-by-iban/'+iban);
  }

  findSaldoByIban(iban:any){
    return this.http.get(this.baseUrlConto+'/lista-movimenti/conto/'+iban);
  }
  findSaldoByCarta(carta:any){
    return this.http.get(this.baseUrlConto+'/listamovimenti/cartadicredito'+carta);
  }
 */
  //chiamate admin
  findAllDatiBancari(){

    return this.http.get<DatiBancari[]>(this.baseUrlConto+'/all-dati-bancari');
  }
  findAllUtenti(){
    return this.http.get<DatiUtente[]>(this.baseUrlCliente+'/find-utenti');
  }
  findAllClienti() {
    return this.http.get<AnagraficaCliente[]>(this.baseUrlCliente + '/find-proprietari');
  }
 /*  saveCarta(bodyCarta:number){
    return this.http.put(this.baseUrlConto+'/save/carta',bodyCarta);
  }
  saveConto(bodyConto:any){
    return this.http.put(this.baseUrlConto+'/save/iban',bodyConto);
  } */
}
