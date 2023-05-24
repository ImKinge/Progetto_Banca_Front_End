import { Component, OnInit} from '@angular/core';
import { ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import { Router} from "@angular/router";
import { HttpClient} from "@angular/common/http";
import { RegisterRequest } from 'src/app/models/registerRequest';

@Component({
  selector: 'app-dati-utente',
  templateUrl: './dati-utente.component.html',
  styleUrls: ['./dati-utente.component.css']
})

export class DatiUtenteComponent implements OnInit{

  fiscalCode="svlgrl94a30z111l";
  myInfo : any;
  message = "Anagraphic User Data";
  valoreConto: string = ''

  constructor(private http: HttpClient, private cliente:ClienteService,private router:Router){};


  ngOnInit(): void {
    // this.cliente.findProprietarioById(this.fiscalCode).subscribe(
    //   (data: RegisterRequest) => {
    //     this.myInfo= data;
    //     //debugger;  /*A video ti ferma sul questo punto per poi sganciarlo dall'ispezionatore del web*/
    //   }
    // );
  }

  goToBonifico() {
    this.router.navigate(["bonifico"]);
  }

  goToListaMovimenti() {
    this.router.navigate(["movimenti"]);
  }

}
