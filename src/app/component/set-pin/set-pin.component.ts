import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-set-pin',
  templateUrl: './set-pin.component.html',
  styleUrls: ['./set-pin.component.css']
})
export class SetPinComponent {

  constructor(private router:Router) {}

  goToHome() {
    this.router.navigate(["home"]);
  }
}
