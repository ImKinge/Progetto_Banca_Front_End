import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import {MatDialog} from "@angular/material/dialog";
import {ErrorComponent} from "../error/error.component";
import {CheckoutComponent} from "../checkout/checkout.component";
import {ResponseModel} from "../../models/responseModel";

@Component({
  selector: 'app-service-bank',
  templateUrl: './service-bank.component.html',
  styleUrls: ['./service-bank.component.css']
})
export class ServiceBankComponent implements OnInit{

  constructor(private router : Router, private service: ClienteService, private matDialog : MatDialog) {

  }

  listProduct : any = [];

  ngOnInit(): void {

    this.service.findAllServiceProduct().subscribe({
      next: (res: any) => {
        this.listProduct = res;
      },
      error: () => {

      }
    });
  }

  putItemToCart (productId: any) {

    this.service.addToCart(productId).subscribe({
      next: (res: ResponseModel) => {
        this.openDialogSuccess();
      },
      error: () => {

      }
    });
  }

  openDialogSuccess() {
    this.matDialog.open(ErrorComponent, {data: {title: 'Success!', messaggio: 'Product correctly placed in the cart!'}});
  }

  goToCheckout() {
    this.matDialog.open(CheckoutComponent);
  }
}
