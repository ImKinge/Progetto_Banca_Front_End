import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movimenti-conto',
  templateUrl: './movimenti.component.html',
  styleUrls: ['./movimenti.component.css']
})
export class MovimentiComponent implements OnInit {



  constructor(private http: HttpClient, private cliente:ClienteService,private router:Router){

  };



  ngOnInit(): void {

    //this.cliente.findListaMovimentiCarta("test").subscribe(pippo => {
    //
    // }
    //
    // )

  }



}
