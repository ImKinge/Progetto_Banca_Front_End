import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { AnagraficaCliente } from 'src/app/models/anagraficaCliente';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { DatiUtente } from 'src/app/models/datiUtente';
import { DatiBancari } from 'src/app/models/datiBancari';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AdminComponent {
  

  infoClienti: any;
  infoUtenti:any;
  infoBanca:any;

  constructor(private servizi: ClienteService,private cliente: AnagraficaCliente, private utente:DatiUtente, private dBanca:DatiBancari) { };

  ngOnInit(): void {
  }
  
  ngAfterContentInit() {
    this.servizi.findAllClienti().subscribe(
      (data: AnagraficaCliente[]) => {
        this.infoClienti = data;
      }
    );

    this.servizi.findAllUtenti().subscribe((data:DatiUtente[]) =>{
      this.infoUtenti=data;
    });
    this.servizi.findAllDatiBancari().subscribe((data:DatiBancari[])=>{
      this.infoBanca=data;
    });

    this.servizi.saveCliente(this.cliente).subscribe().add;

  }


}
