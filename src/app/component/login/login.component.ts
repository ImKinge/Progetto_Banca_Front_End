import { Component } from '@angular/core';

import { ClienteService } from 'src/app/servizi/servizi-cliente/cliente.service';

import { Router} from "@angular/router";
import { JwtRequest} from "../../models/jwtRequest";
import { ErrorComponent} from "../error/error.component";
import { MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  inputUsername: string = "";
  inputPassword: string = "";
  jwtRequest: JwtRequest = new JwtRequest();


  constructor(private service:ClienteService, private router:Router, private matDialog : MatDialog)  {};

  ngOnInit():void{

  }

  /**
   * Con questo metodo andiamo a recuperare username e password che inseriamo nel form del login della pagina
   * Invochiamo la chiamata login() del back end in modo tale che andiamo ad autenticarci e andiamo a salvarci
   * il jwt token generato nel localstorage per autenticarci per le future richieste
   */
  authenticate() {
    this.jwtRequest.setUsername(this.inputUsername);
    this.jwtRequest.setPassword(this.inputPassword);

    this.service.login(this.jwtRequest).subscribe(res => {
      if(res.res.success) {
        localStorage.setItem('token', res.res.responseBody.accessToken) //accessToken è la chiave che troviamo nella respons, controlla Postman
        this.openDialogSuccess();
      }else {
        console.log(res);
        this.openDialogError(res.res);

      }
    }, error => {

    });
  }

  openDialogError (messaggio: string) {
    this.matDialog.open(ErrorComponent, {data: {title: 'Error!', messaggio: messaggio, vaiHome: false}});
  }

  openDialogSuccess() {
    this.matDialog.open(ErrorComponent, {data: {title: 'Success!', messaggio: 'Login success!', vaiHome: true}});
  }

  goToRegistration() {
    this.router.navigate(["registrazione"]);
  }


}







