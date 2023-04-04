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
  registerClient:any;
  inputName: string ="";
  inputSurname:string="";
  inputDate: Date|undefined;
  inputAddress:string="";
  inputFiscalCode:string="";
  inputPhone:number=0;
  inputEmail:string="";

  constructor(private cliente:ClienteService,private router:Router){};


  ngOnInit():void{
    this.cliente.findAllClienti().subscribe(
      (data : AnagraficaCliente[])=>{
        this.clienti = data[0];
      }
    );

   

  }
  registration(){
    this.registerClient={
      "id":this.inputFiscalCode, 
      "name":this.inputName,
      "surname":this.inputSurname,
      "dateOfBirth":this.inputDate,
      "email":this.inputEmail,
      "infoPhone":this.inputPhone,
      "address":this.inputAddress}
    this.cliente.saveCliente(this.registerClient).subscribe(
      ()=>{        
      });
  }

  // goToHome() {
  //   this.router.navigate(["home"]);
  // }

  goToSetPin() {
    this.router.navigate(["set-pin"]);
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }
}
