import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-message-component',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent {

  constructor(public dialogRef: MatDialogRef<ModalMessageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {messaggio: ''},
  ) {
    /*
    dialogRef.disableClose = true;

    Proprietà che non permette la chiusura del popup
    fino a quando non premiamo sul bottone di conferma dell'azione
    Ad esempio avremo un bottone Close nel popup di errore e fino a quando non premeremo
    sul bottone il popup non si toglierà
     */
    dialogRef.disableClose = true;
  }

  closeModal() {
    this.dialogRef.close();
  }

}
