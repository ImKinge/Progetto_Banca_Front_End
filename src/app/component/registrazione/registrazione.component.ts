import { Component } from '@angular/core';
import {ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  message = "Anagraphic User Data";

  constructor(private router:Router){};


  goToDatiUtenti() {
    this.router.navigate(["dati-utente"]);
  }
}
