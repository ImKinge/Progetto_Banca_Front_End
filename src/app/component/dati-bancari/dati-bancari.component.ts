import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dati-bancari',
  templateUrl: './dati-bancari.component.html',
  styleUrls: ['./dati-bancari.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatiBancariComponent implements OnInit{

  ngOnInit():void{
  
    debugger;
    console.log('testBancari');
  }
}

