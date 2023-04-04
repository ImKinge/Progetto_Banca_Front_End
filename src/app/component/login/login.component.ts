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

  inputPin:number=0;
  inputUserCode:number=0;
  user:any;

  info:any;
  pin1:number=0;
  pin2:number=0;

  constructor(private service:ClienteService,private utente:DatiUtente, private router:Router)  {};

  ngOnInit():void{

  }

  goToRegistration() {
    this.router.navigate(["registrazione"]);
  }

  goToHome() {
    this.user={"userCode":this.inputUserCode,"pin":this.inputPin};
    this.service.findUtenteById(this.inputUserCode).subscribe((
      data:DatiUtente)=>{this.info=data;
        this.pin1=this.info.getPin
        this.pin2=this.user.getPin;
        if(  (this.info.getUserCode == this.user.getUserCode)){
          
          if(this.pin1== this.pin2 ){
            
             this.router.navigate(["home"]);
          }
         
        }else{
          this.router.navigate(["login"]);
        }});

   
    
  }

}







