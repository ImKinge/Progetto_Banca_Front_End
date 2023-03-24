import { Component } from '@angular/core';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { DatiUtente } from 'src/app/models/datiUtente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  info:any;
  constructor(private service:ClienteService,private utente:DatiUtente)  {};

  ngOnInit():void{

    this.service.findAllUtenti().subscribe((data:DatiUtente[]) =>{
      this.info=data;
    });
  }


}
