import { Component } from '@angular/core';
import { Router} from "@angular/router";


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

  goToProfile(){
    this.router.navigate(["user-info"]);
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }

  openDialog() {

  }

}

