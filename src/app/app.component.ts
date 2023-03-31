import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import {ClienteService} from "./servizi/servizi-cliente/cliente.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'progettoBanca';


  constructor(private router:Router){};


  goToIban(){
    this.router.navigate(["ibanTransaction"]);
  }

  goToHome() {
  this.router.navigate(["home"]);
  }

}

