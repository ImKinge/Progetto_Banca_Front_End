import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DatiBancariComponent } from './component/dati-bancari/dati-bancari.component';
import { LoginComponent } from './component/login/login.component';
import { DatiUtenteComponent } from './component/dati-utente/dati-utente.component';
import { MovimentiComponent } from './component/movimenti/movimenti.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BonificoComponent } from './component/bonifico/bonifico.component';
import { TransactionIbanComponent } from './component/movimenti/transaction-iban/transaction-iban.component';
import { TransactionCardComponent } from './component/movimenti/transaction-card/transaction-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatiBancariComponent,
    LoginComponent,
    DatiUtenteComponent,
    MovimentiComponent,
    RegistrazioneComponent,
    AdminComponent,
    BonificoComponent,
    TransactionIbanComponent,
    TransactionCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
