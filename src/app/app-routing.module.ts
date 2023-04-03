import { NgModule } from '@angular/core';
import { DatiBancariComponent } from './component/dati-bancari/dati-bancari.component';
import { BonificoComponent} from "./component/bonifico/bonifico.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DatiUtenteComponent } from './component/dati-utente/dati-utente.component';
import { LoginComponent } from './component/login/login.component';
import { MovimentiComponent } from './component/movimenti/movimenti.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { AdminComponent } from './component/admin/admin.component';
import { TransactionIbanComponent } from './component/movimenti/transaction-iban/transaction-iban.component';
import { TransactionCardComponent } from './component/movimenti/transaction-card/transaction-card.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'admin', component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registrazione',component:RegistrazioneComponent},
  {path:'dati-utente', component:DatiUtenteComponent},
  {path:'dati-bancari', component: DatiBancariComponent},
  {path:'movimenti', component:MovimentiComponent},
  {path:'ibanTransaction', component:TransactionIbanComponent},
  {path:'cardTransaction', component:TransactionCardComponent},
  {path:'bonifico', component:BonificoComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}

