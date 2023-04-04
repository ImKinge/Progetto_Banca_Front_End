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

  baseUrlCliente = 'http://localhost:8080/client';
  baseUrlConto ="http://localhost:8080/info-bank";

  constructor(private http: HttpClient) { }



  //chiamate cliente
  saveCliente(body:any) {
    return this.http.post(this.baseUrlCliente + '/save', body);
  }
  updateCliente(body:any){
    return this.http.put(this.baseUrlCliente+'/update', body);
  }
  deleteClinte(codiceFiscale:any){
    return this.http.delete(this.baseUrlCliente+'/delete/'+codiceFiscale);
  }
  findProprietarioById(codiceFiscale: any) {
    return this.http.get<AnagraficaCliente>(this.baseUrlCliente + '/find-proprietario/' + codiceFiscale);
  }
  findUtenteById(userCode:number){
    return this.http.get<DatiUtente>(this.baseUrlCliente+'/find-user/'+userCode);
  }
  findDatiById(codiceFiscale:any){
    return this.http.get(this.baseUrlConto+'/bank-by-fiscalCode/'+codiceFiscale);
  }
  findInfoBankByIban(iban:any){
    return this.http.get<DatiBancari>(this.baseUrlConto+'/bank-by-iban/'+iban);
  }
  findIbanTransactionByIban(iban:any){
    return this.http.get<MovimentoConto[]>(this.baseUrlConto+'/history-list/iban/'+iban);
  }
  findCardTransactionsByCard(card:number){
    return this.http.get<MovimentiCarta[]>(this.baseUrlConto+'/history-list/creditCard/'+card);
  }
  transfers(iban:any){
    return this.http.post(this.baseUrlConto+'/transaction/transfers/iban',iban);
  }
  transfersReceived(iban:any){
    return this.http.post(this.baseUrlConto+'/transaction/transfers-received/iban',iban);
  }
  payments(card:any){
    return this.http.post(this.baseUrlConto+'/transaction/payments/card',card);
  }
  receivedAmountCard(card:any){
    return this.http.post(this.baseUrlConto,'transaction/received/card',card);
  }
  

  //chiamate admin
  findAllInfoBanks(){
    return this.http.get<DatiBancari>(this.baseUrlConto+'/all-info-banks');
  }
  findAllUtenti(){
    return this.http.get<DatiUtente[]>(this.baseUrlCliente+'/find-utenti');
  }
  findAllClienti() {
    return this.http.get<AnagraficaCliente[]>(this.baseUrlCliente + '/find-proprietari');
  }
  saveCard(bodyCard:number){
    return this.http.put(this.baseUrlConto+'/save/card',bodyCard);
  }
  saveIban(bodyIban:any){
    return this.http.put(this.baseUrlConto+'/save/iban',bodyIban);
  }
  findBankByClienteId(fiscalCode:any){
    return this.http.get<DatiBancari>(this.baseUrlConto+"/bank-by-fiscalCode/"+fiscalCode);
  }


}
