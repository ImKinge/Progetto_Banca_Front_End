import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DatiUtenteComponent } from './component/dati-utente/dati-utente.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { AdminComponent } from './component/admin/admin.component';
import { TransactionIbanComponent } from './component/movimenti/transaction-iban/transaction-iban.component';
import { TransactionCardComponent } from './component/movimenti/transaction-card/transaction-card.component';
import { ReportComponent} from "./component/report/report.component";
import { AuthGuard } from "./component/auth/auth.guard";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'admin', component:AdminComponent},
  {path:'home',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'registrazione',component:RegistrazioneComponent},
  {path:'user-info', component:DatiUtenteComponent},
  {path:'ibanTransaction', component:TransactionIbanComponent},
  {path:'cardTransaction', component:TransactionCardComponent},
  {path:'report', component:ReportComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}

