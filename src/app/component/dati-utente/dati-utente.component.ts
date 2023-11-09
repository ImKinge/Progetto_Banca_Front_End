import {Component, OnInit, ViewChild} from '@angular/core';
import {ClienteService} from "../../servizi/servizi-cliente/cliente.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalKpiComponent} from "../modal-kpi/modal-kpi.component";



@Component({
  selector: 'app-dati-utente',
  templateUrl: './dati-utente.component.html',
  styleUrls: ['./dati-utente.component.css']
})

export class DatiUtenteComponent implements OnInit {

  constructor(private service: ClienteService, private matDialog : MatDialog ) {}

  kpiParamTable: any = [
    {
      "brand": "Enel",
      "content": "Ciao",
      "sentiment": 0.0,
      "score": 1,
      "topic_name": "Pluto",
      "id_article": 6526049,
      "id_topic": 62,
      "id_paragraph": 1,
      "sentiment_subj": true,
      "paragraph_weight": 0.1
    },
    {
      "brand": "Enel",
      "content": "Claudio Descalzi has an approval rating of 93 % among ENI's employees. This puts Claudio Descalzi in the top 30 % of approval ratings compared to other CEOs of publicly - traded companies. Who are some of ENI's key competitors? View all of E's competitors.",
      "sentiment": 0.0,
      "score": 0.41664913296699524,
      "topic_name": "Sustainability solutions",
      "id_article": 6526049,
      "id_topic": 10,
      "id_paragraph": 2,
      "sentiment_subj": false,
      "paragraph_weight": 0.1
    },
    {
      "brand": "Enel",
      "content": "It is a content for fe",
      "sentiment": 0.0,
      "score": 333233,
      "topic_name": "Pippo",
      "id_article": 6526049,
      "id_topic": 8,
      "id_paragraph": 3,
      "sentiment_subj": false,
      "paragraph_weight": 0.1
    }
  ]

  kpiTable: any = [
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 1,
      "topic_name": "Grids as enabling platforms",
      "totale": 0.0177273826954321,
      "new_totale": 0.0177273826954321
    },
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 2,
      "topic_name": "Grids as for genuin",
      "totale": 0.0177280826957097,
      "new_totale": 0.0177280826957097
    },
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 3,
      "topic_name": "Grids as accept all",
      "totale": 0.0177280738909876,
      "new_totale": 0.0177280738909876
    },
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 4,
      "topic_name": "Grids as take a question",
      "totale": 0.0177280738260765,
      "new_totale": 0.0177280738260765
    },
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 5,
      "topic_name": "Grids as play with string",
      "totale": 0.0728073826954321,
      "new_totale": 0.0728073826954321
    }
  ]
  tempKpiTableArray = [...this.kpiTable];
  tempKpiParamTableArray = [...this.kpiParamTable];

  initialDataKpiParamTable: any = [
    {
      "brand": "Enel",
      "content": "Ciao",
      "sentiment": 0.0,
      "score": 1,
      "topic_name": "Pluto",
      "id_article": 6526049,
      "id_topic": 62,
      "id_paragraph": 1,
      "sentiment_subj": true,
      "paragraph_weight": 0.1
    },
    {
      "brand": "Enel",
      "content": "Claudio Descalzi has an approval rating of 93 % among ENI's employees. This puts Claudio Descalzi in the top 30 % of approval ratings compared to other CEOs of publicly - traded companies. Who are some of ENI's key competitors? View all of E's competitors.",
      "sentiment": 0.0,
      "score": 0.41664913296699524,
      "topic_name": "Sustainability solutions",
      "id_article": 6526049,
      "id_topic": 10,
      "id_paragraph": 2,
      "sentiment_subj": false,
      "paragraph_weight": 0.1
    },
    {
      "brand": "Enel",
      "content": "It is a content for fe",
      "sentiment": 0.0,
      "score": 333233,
      "topic_name": "Pippo",
      "id_article": 6526049,
      "id_topic": 8,
      "id_paragraph": 3,
      "sentiment_subj": false,
      "paragraph_weight": 0.1
    }
  ]

  initialDataKpiTable: any = [
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 1,
      "topic_name": "Grids as enabling platforms",
      "totale": 0.0177273826954321,
      "new_totale": 0.0177273826954321
    },
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 2,
      "topic_name": "Grids as for genuin",
      "totale": 0.0177280826957097,
      "new_totale": 0.0177280826957097
    },
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 3,
      "topic_name": "Grids as accept all",
      "totale": 0.0177280738909876,
      "new_totale": 0.0177280738909876
    },
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 4,
      "topic_name": "Grids as take a question",
      "totale": 0.0177280738260765,
      "new_totale": 0.0177280738260765
    },
    {
      "url": "https://www.prnewswire.co.uk/news-releases/eco-wave-power-presents-significant-operational-progress-as-it-heads-towards-its-first-commercial-scale-project-and-reports-first-half-2023-financial-results-301940529.html",
      "sigma": 0.72420263,
      "new_sigma": 0.72420263,
      "gamma": 7.445736232259245,
      "new_gamma": 7.445736232259245,
      "id_topic": 5,
      "topic_name": "Grids as play with string",
      "totale": 0.0728073826954321,
      "new_totale": 0.0728073826954321
    }
  ]

  sortDirection: any = [];


  //filter for 1 table
  @ViewChild('topicNameVar') topicNameVar1: any = "";
  @ViewChild('idTopicVar') idTopicVar1: any = "";
  @ViewChild('totaleVar') totaleVar1: any = "";
  @ViewChild('newTotaleVar') newTotaleVar1: any = "";

  //filter for 2 table
  @ViewChild('idParagraphVar') idParagraphVar1: any = "";
  @ViewChild('contentVar') contentVar1: any = "";
  @ViewChild('paragraphWVar') paragraphWVar1: any = "";
  @ViewChild('sentimentSubjVar') sentimentSubjVar1: any = "";


  ngOnInit(): void {
    // this.service.getResponseTable().subscribe((resp : any) => {
    //   this.kpiTable = resp.kpi_table_dto_list;
    //   console.log(this.kpiTable);
    // });
    this.kpiTable.forEach((element: any) => {
      element.initGamma = element.gamma;
    })
    console.log(this.kpiTable);

    this.kpiParamTable.forEach((element: any) => {
      element.initParagraphW = element.paragraph_weight;
      element.initialSigma = element.sentiment;
      element.initScore = element.score;
    })
    console.log(this.kpiParamTable)

    //init status for sorting
    this.sortDirection["id_paragraph"] = false;
  }

  //function per filtrare la prima tabella
  searchFilterKpiTable() {
    this.tempKpiTableArray = [];
    let filterObject: any = {
      topic_name: this.topicNameVar1.nativeElement.value,
      id_topic: this.idTopicVar1.nativeElement.value,
      totale: this.totaleVar1.nativeElement.value,
      new_totale: this.newTotaleVar1.nativeElement.value
    }
    for (let i = 0; i < this.kpiTable.length; i++) {
      let isStringMatch;
      for (let key in filterObject) {
        /*
        Se ci fossero state tutte stringhe, le condizione no servirebbero:
        bastava semplicemente eliminare gli if per le colonne che contengono i numeri e scrivere questa linea di codice:

        isStringMatch = this.backendData[i][key].toUpperCase().indexOf(filterObject[key].toUpperCase()) > -1;
        * */
        if (key == "id_topic" || key == "totale" || key == "new_totale") {
          //toString perche indexOf() confronta stringhe e quindi se un valore è un numero dobbiamo trasformarlo in string
          isStringMatch = this.kpiTable[i][key].toString().indexOf(filterObject[key]) > -1;
        } else {
          isStringMatch = this.kpiTable[i][key].toUpperCase().indexOf(filterObject[key].toUpperCase()) > -1;
        }
        if (isStringMatch == false) {
          break;
        }
      }
      if (isStringMatch) {
        this.tempKpiTableArray.push(this.kpiTable[i]);
      }
    }
  }
  //function per filtrare la seconda tabella
  searchFilterKpiParamTable () {
    this.tempKpiParamTableArray = [];
    let filterObject: any = {
      id_paragraph: this.idParagraphVar1.nativeElement.value,
      content: this.contentVar1.nativeElement.value,
      paragraph_weight: this.paragraphWVar1.nativeElement.value,
      sentiment_subj: this.sentimentSubjVar1.nativeElement.value
    }
    for (let i = 0; i < this.kpiParamTable.length; i++) {
      let isStringMatch;
      for (let key in filterObject) {
        /*
        Se ci fossero state tutte stringhe, le condizione no servirebbero:
        bastava semplicemente eliminare gli if per le colonne che contengono i numeri e scrivere questa linea di codice:

        isStringMatch = this.backendData[i][key].toUpperCase().indexOf(filterObject[key].toUpperCase()) > -1;
        * */
        if (key == "id_paragraph"  || key == "paragraph_weight") {
          //toString perchè indexOf() confronta stringhe e quindi se un valore è un numero dobbiamo trasformarlo in string
          isStringMatch = this.kpiParamTable[i][key].toString().indexOf(filterObject[key]) > -1;
        } else if (key == "sentiment_subj") {
          isStringMatch = this.kpiParamTable[i][key].toString().toUpperCase().indexOf(filterObject[key].toUpperCase()) > -1;
        } else {
          isStringMatch = this.kpiParamTable[i][key].toUpperCase().indexOf(filterObject[key].toUpperCase()) > -1;
        }
        if (isStringMatch == false) {
          break;
        }
      }
      if (isStringMatch) {
        this.tempKpiParamTableArray.push(this.kpiParamTable[i]);
      }
    }
  }

  logValue() {
    console.log(this.kpiParamTable)
    // this.pippo.mandaABAckedn(this.backendData).subscribe({
    //   next: {
    //
    //   },
    //   error: {
    //
    //   },
    //   complete:{
    //
    //   }
    // })
  }

  /*
  metodo che permette di ripristinare i valori allo stato di arrivo della chiamata.
  */
  removeNewParams() {
    this.kpiTable = []
    this.tempKpiParamTableArray = []
    this.initialDataKpiParamTable.forEach((val: any) => {
      this.tempKpiParamTableArray.push(Object.assign({}, val))
    });
    this.initialDataKpiTable.forEach((val: any) => {
      this.kpiTable.push(Object.assign({}, val))
    });
    this.tempKpiParamTableArray.forEach((element: any) => {
      element.initParagraphW = element.paragraph_weight;
      element.initialSigma = element.sentiment;
      element.initScore = element.score;
    })
    this.kpiTable.forEach((element: any) => {
      element.initGamma = element.gamma;
    })
  }

  sortFunction(colName: any) {
    if (this.sortDirection[colName] == true){
      this.tempKpiParamTableArray.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
      this.sortDirection[colName] = false;
    }
    else{
      this.tempKpiParamTableArray.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      this.sortDirection[colName] = true;
    }
  }

  saveParams() {
   this.openDialogSave();
  }

  openDialogSave() {
    this.matDialog.open(ModalKpiComponent, {data: {messaggio: 'Salvataggio dei parametri modificati, vuoi procedere?'}});
  }
}
