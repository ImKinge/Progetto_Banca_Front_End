import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DatiBancariComponent } from './component/dati-bancari/dati-bancari.component';
import { LoginComponent } from './component/login/login.component';
import { DatiUtenteComponent } from './component/dati-utente/dati-utente.component';
import { MovimentiContoComponent } from './component/movimenti-conto/movimenti-conto.component';
import { MovimentiCartaComponent } from './component/movimenti-carta/movimenti-carta.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './component/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatiBancariComponent,
    LoginComponent,
    DatiUtenteComponent,
    MovimentiContoComponent,
    MovimentiCartaComponent,
    RegistrazioneComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
