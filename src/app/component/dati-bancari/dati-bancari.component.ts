import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { DatiBancari } from 'src/app/models/datiBancari';
import { AnagraficaCliente } from 'src/app/models/anagraficaCliente';

@Component({
  selector: 'app-dati-bancari',
  templateUrl: './dati-bancari.component.html',
  styleUrls: ['./dati-bancari.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatiBancariComponent implements OnInit {


  infoBanca: any;
  infoCliente:any;
  codiceFiscale: any;

  constructor(private service: ClienteService) { };

  ngOnInit(): void {
    this.service.findBancaByCodicefiscale(this.codiceFiscale).subscribe(
      (data: DatiBancari) => {
      this.infoBanca = data;
    });

    this.service.findProprietarioById(this.codiceFiscale).subscribe(
      (data:AnagraficaCliente)=>{this.infoCliente=data;});
  }
}

