import { Component, OnInit } from '@angular/core';
import { AnagraficaCliente } from 'src/app/models/anagraficaCliente';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  test:any;

  constructor(private cliente:ClienteService){};

ngOnInit():void{
  this.cliente.findAllClienti().subscribe(
    (data : AnagraficaCliente[])=>{
      this.test = data;
    }
    );
}
}
