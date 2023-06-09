import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DatiUtenteComponent } from './component/dati-utente/dati-utente.component';
import { MovimentiComponent } from './component/movimenti/movimenti.component';
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
import {TransactionIbanComponent} from "./component/movimenti/transaction-iban/transaction-iban.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DatiUtenteComponent,
    MovimentiComponent,
    RegistrazioneComponent,
    AdminComponent,
    TransactionIbanComponent,
    TransactionCardComponent,
    ErrorComponent,
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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
