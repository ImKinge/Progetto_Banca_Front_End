import { Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { AnagraficaCliente } from 'src/app/models/anagraficaCliente';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  test : any;
  message = "WELCOME!";


  constructor(private cliente:ClienteService, private router:Router){};

ngOnInit():void{
  this.cliente.findAllClienti().subscribe(
    (data : AnagraficaCliente[])=>{
      this.test = data[0];
    }
    );

  //this.cliente.findProprietarioById('svlgrl').subscribe(data =>{console.log(data)});
  //this.router.navigate(['dati-bancari']);
}

  goToLogin() {
    this.router.navigate(["login"]);
  }


  goToRegistration() {
    this.router.navigate(["registrazione"]);
  }
}
