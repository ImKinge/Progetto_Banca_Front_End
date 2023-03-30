import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { MovimentoConto } from 'src/app/models/movimentiConto';
import { DatiBancari } from 'src/app/models/datiBancari';
@Component({
  selector: 'app-transaction-iban',
  templateUrl: './transaction-iban.component.html',
  styleUrls: ['./transaction-iban.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionIbanComponent {


  iban="IT7894561221654987789456123";
  infoIban:any;
  infoBank:any;

  constructor(private service:ClienteService){};



  ngOnInit():void{
    this.service.findIbanTransactionByIban(this.iban).subscribe(
      (data:MovimentoConto[])=>{
        this.infoIban=data;
      });

    this.service.findInfoBankByIban(this.iban).subscribe(
      (data:DatiBancari)=>{
          this.infoBank=data;
      })
  }

  ngAfterContentInit():void{
 //   this.service.transfers()

  }
}
