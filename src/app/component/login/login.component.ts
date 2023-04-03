import { Component } from '@angular/core';

import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { DatiUtente } from 'src/app/models/datiUtente';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  info:any;

  constructor(private service:ClienteService,private utente:DatiUtente, private router:Router)  {};

  ngOnInit():void{

    this.service.findAllUtenti().subscribe((data:DatiUtente[]) =>{
      this.info=data;
    });
  }

  goToRegistration() {
    this.router.navigate(["registrazione"]);
  }

  goToHome() {
    this.router.navigate(["home"]);
  }

}







