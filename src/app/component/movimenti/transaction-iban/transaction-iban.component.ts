import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { MovimentoConto } from 'src/app/models/movimentiConto';
import { DatiBancari } from 'src/app/models/datiBancari';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-iban',
  templateUrl: './transaction-iban.component.html',
  styleUrls: ['./transaction-iban.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class TransactionIbanComponent {


  iban = "IT7894561221654987789456123";
  infoIban: any;
  infoBank: any;
  infoBeneficiary: any;


  inputAmountIban :number = 0;
  inputIbanBeneficiary :string = "";
  inputDescription :string = "";
  transferPayment :any;

  constructor(private service: ClienteService, private router:Router) { };

  now = new Date;

  ngOnInit(): void {
    this.service.findIbanTransactionByIban(this.iban).subscribe(
      (data: MovimentoConto[]) => {
        this.infoIban = data;
      });

    this.service.findInfoBankByIban(this.iban).subscribe(
      (data: DatiBancari) => {
        this.infoBank = data;
      })

  }
  validateTransfer() {
     this.service.findInfoBankByIban(this.inputIbanBeneficiary).subscribe(
      (data: DatiBancari) => { this.infoBeneficiary = data
        this.transferPayment=  {"iban" : this.infoBank.iban,
        "amountIban" : this.inputAmountIban,
        "descriptionTransactional" : this.inputDescription,
        "fiscalCode" : this.infoBank.fiscalCode,
        "ibanBeneficiary" : this.inputIbanBeneficiary,
        "fiscalCodeBeneficiary": this.infoBeneficiary.fiscalCode,
        "date": this.now};

        this.service.transfers(this.transferPayment).subscribe(() => {});
        this.router.navigate(["home"]);
      });

  }




}
