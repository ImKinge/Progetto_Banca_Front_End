import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import {Router} from "@angular/router";
import {AnagraficaCliente} from "../../models/anagraficaCliente";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit{

  clienti : any;
  message = "Anagraphic User Data";

  constructor(private cliente:ClienteService,private router:Router){};


  ngOnInit():void{
    this.cliente.findAllClienti().subscribe(
      (data : AnagraficaCliente[])=>{
        this.clienti = data[0];
      }
    );
  }

  goToHome() {
    this.router.navigate(["home"]);
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }
}
