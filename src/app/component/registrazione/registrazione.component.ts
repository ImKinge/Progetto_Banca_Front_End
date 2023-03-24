import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { AnagraficaCliente } from 'src/app/models/anagraficaCliente';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {


  constructor(private service:ClienteService, private cliente:AnagraficaCliente){};

  ngOnInit(){
    //this.service.saveCliente(this.cliente).subscribe().add;

  }

}
