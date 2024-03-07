import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DatiUtenteComponent } from './component/dati-utente/dati-utente.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransactionCardComponent } from './component/movimenti/transaction-card/transaction-card.component';
import { CustomInterceptor } from "./interceptor/custom.interceptor";
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorComponent } from './component/error/error.component';
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatInputModule} from "@angular/material/input";
import { MatNativeDateModule} from "@angular/material/core";
import { TransactionIbanComponent} from "./component/movimenti/transaction-iban/transaction-iban.component";
import { ReportComponent } from './component/report/report.component';
import { MatSelectModule} from "@angular/material/select";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalKpiSaveComponent } from './component/modal-kpi-save/modal-kpi-save.component';
import { ModalMessageComponent } from './component/modal-message/modal-message.component';
import { ModalAddTopicComponent } from './component/modal-add-topic/modal-add-topic.component';
import { ServiceBankComponent } from './component/service-bank/service-bank.component';
import { MatCardModule} from "@angular/material/card";
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ProfileComponent } from './component/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DatiUtenteComponent,
    RegistrazioneComponent,
    AdminComponent,
    TransactionIbanComponent,
    TransactionCardComponent,
    ErrorComponent,
    ReportComponent,
    ModalKpiSaveComponent,
    ModalMessageComponent,
    ModalAddTopicComponent,
    ServiceBankComponent,
    CheckoutComponent,
    ProfileComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatSelectModule,
        NgxDatatableModule,
        MatCardModule,
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
