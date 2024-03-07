import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor(private router:Router) { }

  isAuthenticate (): boolean {
    if(localStorage.getItem('token')) {
      this.isLoggedIn = true;
    } else {
      this.router.navigate(['login']);
    }
    return this.isLoggedIn;
  }
}
