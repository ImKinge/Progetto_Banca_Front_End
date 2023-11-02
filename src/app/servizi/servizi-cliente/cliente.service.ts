import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {CustomerData} from "../../models/customerData";
import {ResponseModel} from "../../models/responseModel";
import {JwtRequest} from "../../models/jwtRequest";
import {BaseResponse} from "../../models/baseResponse";


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrlCliente = 'http://localhost:8080/customer';
  baseUrlTransaction = "http://localhost:8080/transaction";
  baseUrlCurrentAccount = "http://localhost:8080/current-account";
  baseUrlCard = "http://localhost:8080/card"
  baseReport = "http://localhost:8080/report";
  baseUrlAuthenticate = "http://localhost:8080/authenticate";


  constructor(private http: HttpClient) { }


  saveCliente( body : any) {
    return this.http.post(this.baseUrlCliente + '/save', body);
  }

  getCardTransaction () {
    return this.http.get<ResponseModel>(this.baseUrlTransaction + '/card-transaction');
  }

  findByFiscalCode (fiscalCode: any) {
    return this.http.get<CustomerData>(this.baseUrlCliente + '/find-customer/' + fiscalCode);
  }

  findCurrentAccountByFiscalCode () {
    return this.http.get<ResponseModel>(this.baseUrlCurrentAccount + '/customer');
  }

  findCardByFiscalCode () {
    return this.http.get<ResponseModel>(this.baseUrlCard + '/card-number')
  }

  getIbanTransaction () {
    return this.http.get<ResponseModel>( this.baseUrlTransaction +'/iban-transaction');
  }

  makeTransfer (iban : any) {
    return this.http.post(this.baseUrlTransaction + '/transfer', iban);
  }

  login (jwtRequest : JwtRequest) {
    return this.http.post<BaseResponse>(this.baseUrlAuthenticate + '/login', jwtRequest);
  }

  downloadReport(reportRequest: any) {
    return this.http.post(this.baseReport + '/download', reportRequest,
      {observe: 'response', responseType: 'blob'});
  }

}
