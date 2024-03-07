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
import { ServiceBankComponent } from "./component/service-bank/service-bank.component";
import { ProfileComponent} from "./component/profile/profile.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'admin', component:AdminComponent},
  {path:'home',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'registrazione',component:RegistrazioneComponent},
  {path:'user-info', component:DatiUtenteComponent},
  {path:'ibanTransaction', component:TransactionIbanComponent, canActivate: [AuthGuard]},
  {path:'cardTransaction', component:TransactionCardComponent},
  {path:'report', component:ReportComponent, canActivate: [AuthGuard]},
  {path:'service-bank', component:ServiceBankComponent, canActivate: [AuthGuard]},
  {path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}

