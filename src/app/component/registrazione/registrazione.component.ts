import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import {Router} from "@angular/router";
import {RegisterRequest} from "../../models/registerRequest";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit{

  inputFiscalCode: string = "";
  inputName: string = "";
  inputSurname: string = "";
  inputDate: Date = new Date();
  inputAddress: string = "";
  inputPhone: number = 0;
  inputEmail: string = "";

  constructor(private service:ClienteService,private router:Router){};


  ngOnInit():void{

  }

  registration(){

   let registerRequestObj = new RegisterRequest();
   registerRequestObj.name = this.inputName;
   registerRequestObj.surname = this.inputSurname;
   registerRequestObj.address = this.inputAddress;
   registerRequestObj.infoPhone = this.inputPhone;
   registerRequestObj.id= this.inputFiscalCode;
   registerRequestObj.dateOfBirth= this.inputDate;
   registerRequestObj.email= this.inputEmail;

    //this.service.saveCliente(this.registerRequestObj).subscribe(() => {});

  }


  goToSetPin() {
    this.router.navigate(["set-pin"]);
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }
}
