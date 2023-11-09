import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-modal-kpi',
  templateUrl: './modal-kpi.component.html',
  styleUrls: ['./modal-kpi.component.css']
})
export class ModalKpiComponent {

  constructor(public dialogRef: MatDialogRef<ModalKpiComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {messaggio: ''},
              private matDialog : MatDialog,
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

  saveParams() {
    //inserire qui la funzione che salva
    this.openDialogSuccess();
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }

  openDialogSuccess() {
    this.matDialog.open(MessageComponent, {data: {messaggio: 'Salvataggio avvenuto con successo!'}});
  }
}
