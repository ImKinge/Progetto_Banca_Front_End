import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { Router } from '@angular/router';
import { CurrentAccount} from "../../../models/currentAccount";
import { ResponseModel } from "../../../models/responseModel";
import { MatDialog } from "@angular/material/dialog";
import { ErrorComponent} from "../../error/error.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-transaction-iban',
  templateUrl: './transaction-iban.component.html',
  styleUrls: ['./transaction-iban.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class TransactionIbanComponent implements OnInit {

  currentAccount: CurrentAccount = new CurrentAccount()

  inputAmountIban :number = 0;
  inputIbanBeneficiary :string = "";
  inputDescription :string = "";
  inputName : string = "";
  inputSurname : string = "";
  inputDate = new FormControl('');
  transferPayment :any;

  constructor(private service: ClienteService, private router:Router, private matDialog : MatDialog) { };


  ngOnInit(): void {
    this.service.findCurrentAccountByFiscalCode().subscribe(
      (data: ResponseModel) => {
        this.currentAccount = data.responseBody as CurrentAccount;
      })

  }

  validateTransfer() {
        this.transferPayment = {
          "amount" : this.inputAmountIban,
          "description": this.inputDescription,
          "ibanBeneficiary": this.inputIbanBeneficiary,
          "name" : this.inputName,
          "surname" : this.inputSurname,
          "dateTransaction" : this.inputDate.value
        }
        this.service.makeTransfer(this.transferPayment)
          .subscribe((data: any) => {
            this.openDialogSuccess()
        },error => {
            console.log(error);
             //alert(error.error.responseBody);
            this.openDialogError(error.error.responseBody)
           });
  }

  openDialogError (messaggio: string) {
    this.matDialog.open(ErrorComponent, {data: {title: 'Error!', messaggio: messaggio, vaiHome: false}});
  }

  openDialogSuccess() {
    this.matDialog.open(ErrorComponent, {data: {title: 'Success!', messaggio: 'Success transfer', vaiHome: true}});
  }

}
