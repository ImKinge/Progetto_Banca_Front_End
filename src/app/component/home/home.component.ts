import { Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';
import { AnagraficaCliente } from 'src/app/models/anagraficaCliente';
import {Router} from '@angular/router';
import { MovimentoConto } from 'src/app/models/movimentiConto';
import { DatiBancari } from 'src/app/models/datiBancari';
import { MovimentiCarta } from 'src/app/models/movimentiCarta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  iban:string="IT1234567891234567893211234";
  //numberCard:number=9833123412341234;
  infoIban:any;
  infoCard:any;
  infoBank:any;
  test : any;
  message = "WELCOME!";


  constructor( private router:Router, private service:ClienteService){};

ngOnInit():void{

  this.service.findIbanTransactionByIban(this.iban).subscribe(
    (data:MovimentoConto[])=>{
      this.infoIban=data;
    });

  this.service.findInfoBankByIban(this.iban).subscribe(
    (data:DatiBancari)=>{
        this.infoBank=data;
        this.service.findCardTransactionsByCard(this.infoBank.creditCard).subscribe(
          (data:MovimentiCarta[])=>{
          this.infoCard=data;
        }); 
    });

    
    
  this.service.findAllClienti().subscribe(
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
