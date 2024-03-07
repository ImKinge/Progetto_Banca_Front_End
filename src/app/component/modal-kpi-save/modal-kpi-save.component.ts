import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalMessageComponent} from "../modal-message/modal-message.component";

@Component({
  selector: 'app-modal-kpi',
  templateUrl: './modal-kpi-save.component.html',
  styleUrls: ['./modal-kpi-save.component.css']
})
export class ModalKpiSaveComponent {

  constructor(public dialogRef: MatDialogRef<ModalKpiSaveComponent>,
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
    this.matDialog.open(ModalMessageComponent, {data: {messaggio: 'Salvataggio avvenuto con successo!'}});
  }
}
