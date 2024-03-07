import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import {ResponseModel} from "../../models/responseModel";
import {ErrorComponent} from "../error/error.component";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  constructor(public service: ClienteService, private matDialog : MatDialog) {}

  listProduct : any;
  messageSuccess: any;

  total: number = 0;

  ngOnInit(): void {
    this.service.getCartDetailsByCustomer().subscribe({
      next: (res: any) => {
        this.listProduct = res.responseBody;
        if(this.listProduct.length == 0) {
          this.total = 0
        } else {
          this.calculateTotal();
        }
      },
      error: () => {

      }
    })
  }

  calculateTotal() {
    this.listProduct.forEach((res : any) =>{
      this.total += res.serviceBank.monthlyFee;
    })
  }


  deleteOrders(x: any) {
    this.service.removeToCart(x).subscribe({
      next: (res: any) => {
        this.messageSuccess = "Delete to cart success!";
        this.openDialogSuccess();
        this.listProduct.splice(x, 1);
        this.service.getCartDetailsByCustomer().subscribe({
          next: (res: any) => {
            this.listProduct = res.responseBody;
            this.total = 0;
            this.calculateTotal();
          },
          error: () => {

          }
        });
      }
    });
  }

  purchaseServiceBank (listCart : any) {
    this.service.purchaseServiceBank(listCart).subscribe({
      next: (res: any) => {
        this.messageSuccess = res.responseBody;
        this.openDialogSuccess();
        this.listProduct = [];
        this.total = 0
      },
      error: () => {

      }
    })
  }

  openDialogSuccess() {
    this.matDialog.open(ErrorComponent, {data: {title: 'Success!', messaggio: this.messageSuccess, vaiHome: false}});
  }
}
