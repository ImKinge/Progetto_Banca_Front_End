import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import {MatDialog} from "@angular/material/dialog";
import {ErrorComponent} from "../error/error.component";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  selectOperation = new FormControl('');
  inputStartDate = new FormControl('');
  inputEndDate = new FormControl('');
  // pippo: FormGroup = new FormGroup<any>({
  //   operation: [{value: '', disabled: true}, Validators.required]
  // })
  blob: any;

  constructor(private service:ClienteService, private matDialog : MatDialog){}

  ngOnInit (): void {

  }

  //metodo per scaricare un file csv
  downloadFile(): void {

    // this.pippo.getRawValue()

    //qui mi vado a prendere i dati del form così posso ottenere la response
    let reportRequest = {
      operation: this.selectOperation.value,
      dateStart: this.inputStartDate.value,
      dateEnd: this.inputEndDate.value
    }

    this.service.downloadReport(reportRequest).subscribe(
      (response) => {
       let fileName = 'report.csv';
       let blob: Blob= response.body as Blob;
       let a = document.createElement('a');
       a.download = fileName;
       a.href = window.URL.createObjectURL(blob);
       a.click();
       this.openDialogSuccess()
      },error => {
        console.log(error);
        //alert(error.error.responseBody);
        this.openDialogError(error.error.responseBody)
      }
    );
  }

  openDialogSuccess() {
    this.matDialog.open(ErrorComponent, {data: {title: 'Success!', messaggio: 'Success Download!', vaiHome: true}});
  }

  openDialogError (messaggio: string) {
    this.matDialog.open(ErrorComponent, {data: {title: 'Error!', messaggio: "Enter a date that is no later than today!"}});
  }
}

