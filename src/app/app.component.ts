import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'progettoBanca';
  //checkLogin: boolean = false;

  constructor(private router:Router){};

  ngOnInit():void{
    //this.checkLogin = localStorage.getItem('token') ? true : false;
  }

  goToIban(){
    this.router.navigate(["ibanTransaction"]);
  }

  goToHome() {
    if (localStorage.getItem('token')) {
      this.router.navigate(["home"]);
    }
  }

  goToReport() {
    if (localStorage.getItem('token')) {
      this.router.navigate(["report"]);
    }
  }

  goToTable(){
    if (localStorage.getItem('token')) {
      this.router.navigate(["user-info"]);
    }
  }

  goToProfile() {
    this.router.navigate(["profile"]);
  }

  goToLogin() {
    localStorage.removeItem('token');
    this.router.navigate(["login"]);
  }

  goToServiceBank() {
    // if (localStorage.getItem('token')) {
      this.router.navigate(["service-bank"]);
    // }
  }
}

