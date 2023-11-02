import {Component, OnInit, ViewChild} from '@angular/core';
import { ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import { Router} from "@angular/router";
import { HttpClient} from "@angular/common/http";
import {ColumnMode} from "@swimlane/ngx-datatable";


@Component({
  selector: 'app-dati-utente',
  templateUrl: './dati-utente.component.html',
  styleUrls: ['./dati-utente.component.css']
})

export class DatiUtenteComponent implements OnInit{
  name = 'Angular';
  enableEdit = false;
  enableEditIndex: number = 0;
  backendData = [{
    "name": 'Target',
    "value": '100',
    "description": 'abc'
  },
    {
      "name": 'Size',
      "value": '20',
      "description": 'def'
    },
    {
      "name": 'Industry',
      "value": '40',
      "description": 'ghi'
    }]
  @ViewChild('tst') tst: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  enableEditMethod(e: Event, i: number) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

  logValue(){
    console.log(this.backendData)
  }

  test(){
    this.tst.control.touched = true
  }


}
