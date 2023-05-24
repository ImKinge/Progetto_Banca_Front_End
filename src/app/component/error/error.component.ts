import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: '', messaggio: '', vaiHome: boolean},
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


  onNoClick(): void {
    this.dialogRef.close();
  }

  vaiHome(){
    this.router.navigate(["home"]);
    this.dialogRef.close();
  }
}
