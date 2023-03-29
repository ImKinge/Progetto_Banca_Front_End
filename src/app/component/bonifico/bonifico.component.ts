import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DatiUtente} from "../../models/datiUtente";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Transfer} from "../../models/Payment";

@Component({
  selector: 'app-bonifico',
  templateUrl: './bonifico.component.html',
  styleUrls: ['./bonifico.component.css']
})
export class BonificoComponent implements OnInit {

  valoreConto: string = '';
  datiUtente: DatiUtente;
  payment: Transfer;

  formBonifico: FormGroup = new FormGroup({
    importo: new FormControl()
  })

  constructor(private http: HttpClient, private router:Router) {
    this.datiUtente = {
      iban: '',
      ibanBalance: '',
      creditCard: '',
      balanceCredit: ''
    }
    this.payment = {
      payment: ''
    }

  }

  ngOnInit() {
    this.loadSaldoBonifico()
  }

  loadSaldoBonifico(simulaBonifico: boolean = false): void {
    this.http.get<DatiUtente>(simulaBonifico==false? "./assets/data/find-utente.json" : "./assets/data/replace-credit.json" ).subscribe(res => {
      this.valoreConto = res.balanceCredit;
      // this.formBonifico.get('importo')!.setValue(res.balanceCredit)//per settare un valore da una chiamata o un json(nel nostro caso
      console.log(res)
    });
  }

  faiBonifico(){
    this.http.get<Transfer>("./assets/data/request-payment.json").subscribe(res => {
      this.loadSaldoBonifico(true);
    }, error => {

    });
  }

  goToDatiUtenti() {
    this.router.navigate(["dati-utente"]);
  }
}
