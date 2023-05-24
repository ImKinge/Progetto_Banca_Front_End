import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { RegisterRequest } from 'src/app/models/registerRequest';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { CustomerData } from 'src/app/models/customerData';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AdminComponent {

  infoClienti: any;
  infoUtenti: any;
  infoBanca: any;
  codiceFiscale:any;

  constructor(private servizi: ClienteService, private cliente: RegisterRequest) { };

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    // this.servizi.findAllClienti().subscribe(
    //   (data: RegisterRequest[]) => {
    //     this.infoClienti = data;
    //   }
    // );

    // this.servizi.findAllUtenti().subscribe((data: DatiUtente[]) => {
    //   this.infoUtenti = data;
    // });
    // this.servizi.findAllDatiBancari().subscribe((data: DatiBancari[]) => {
    //   this.infoBanca = data;
    // });
/*
    this.servizi.saveCliente(this.cliente).subscribe().add;

    this.servizi.deleteClinte(this.codiceFiscale).subscribe().remove;
  */

  }


}
