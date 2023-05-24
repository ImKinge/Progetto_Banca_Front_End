import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { MovimentiCarta } from 'src/app/models/movimentiCarta';
import{ClienteService} from 'src/app/servizi/servizi-cliente/cliente.service';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionCardComponent {

  infoCard:any;

  numberCard:number = 9833123412341234;
  constructor(private transaction:MovimentiCarta, private service: ClienteService){};



  ngOnInit():void{

    // this.service.findCardTransactionsByCard(this.numberCard).subscribe(
    //   (data:MovimentiCarta[])=>{
    //   this.infoCard=data;
    // });


    /*this.service.findAllInfoBanks().subscribe((data:)) */
  }
  ngAfterContentInit():void{


    // this.service.payments(this.infoCard).subscribe(()=>{
    //   this.infoCard;
    // });
  }

}
