import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AnagraficaCliente } from 'src/app/models/anagraficaCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'http://localhost:8080/cliente';

  constructor(private http : HttpClient) { }

  
  findAllClienti()
{
  return this.http.get<AnagraficaCliente[]>(this.baseUrl + '/find-proprietari');
}
findProprietarioById(id:any){
  return this.http.get(this.baseUrl+'/find-proprietario/'+id);
  

}
}
