import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ClienteService} from 'src/app/servizi/servizi-cliente/cliente.service';
import {Router} from '@angular/router';
import {ResponseModel} from "../../models/responseModel";
import {MovimentoConto} from "../../models/movimentiConto";
import {CurrentAccount} from "../../models/currentAccount";
import {MovimentiCarta} from "../../models/movimentiCarta";
import {Card} from "../../models/card";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  numberCard: string = "98i09748962926";
  infoIban: MovimentoConto[] = [];
  infoCard: MovimentiCarta[] = [];
  currentAccount: CurrentAccount = new CurrentAccount();
  card : Card = new Card();


  constructor(private router: Router, private service: ClienteService) {
  };

  ngOnInit(): void {

    this.service.getIbanTransaction().subscribe(
      //Perchè su back-end torna una responseEntity e quindi dobbiamo cambiare anche da front-end il ritorno della risposta
      (data: ResponseModel) => {
        //il responseBody dovrà avere sempre un modello come il contenuto di responseBody stesso
        this.infoIban = data.responseBody as MovimentoConto[];
      });

    this.service.findCurrentAccountByFiscalCode().subscribe(
      (data: ResponseModel) => {
        this.currentAccount = data.responseBody as CurrentAccount;
      })

    this.service.findCardByFiscalCode().subscribe(
      (data: ResponseModel) => {
        this.card = data.responseBody as Card;
      }

    )

    this.service.getCardTransaction().subscribe(
      (data: ResponseModel) => {
        this.infoCard = data.responseBody as MovimentiCarta[];
      });

  }
}
