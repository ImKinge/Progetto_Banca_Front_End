import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
  baseUrlServiceBank = "http://localhost:8080/service-bank"
  baseUrlCart = "http://localhost:8080/cart"
  baseUrlDetailsUser = "http://localhost:8080/details"

  constructor(private http: HttpClient) { }

  getCardTransaction () {
    return this.http.get<ResponseModel>(this.baseUrlTransaction + '/card-transaction');
  }

  findByFiscalCode () {
    return this.http.get<ResponseModel>(this.baseUrlCliente + '/find-customer');
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

  findAllServiceProduct() {
    return this.http.get<ResponseModel>(this.baseUrlServiceBank + "/get-all-product");
  }

  addToCart(productId : any) {
    return this.http.get<ResponseModel>(this.baseUrlCart + "/add-to-cart/" + productId);
  }

  removeToCart (productId : any) {
    return this.http.delete<ResponseModel>(this.baseUrlCart + "/delete-to-cart/" + productId)
  }

  getCartDetailsByCustomer() {
    return this.http.get<ResponseModel>(this.baseUrlCart + "/get-cart-details");
  }

  purchaseServiceBank (listCart: any) {
    return this.http.post<ResponseModel>(this.baseUrlDetailsUser + "/purchase-service-bank", listCart);
  }

  getActivateServicesByCustomer() {
    return this.http.get<ResponseModel>(this.baseUrlDetailsUser + "/get-activate-services")
  }

}
