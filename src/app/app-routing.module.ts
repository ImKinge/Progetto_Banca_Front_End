import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatiBancariComponent } from './component/dati-bancari/dati-bancari.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DatiUtenteComponent } from './component/dati-utente/dati-utente.component';
import { LoginComponent } from './component/login/login.component';
import { MovimentiCartaComponent } from './component/movimenti-carta/movimenti-carta.component';
import { MovimentiContoComponent } from './component/movimenti-conto/movimenti-conto.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { AdminComponent } from './component/admin/admin.component';


const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registrazione',component:RegistrazioneComponent},
  {path:'dati-utente', component:DatiUtenteComponent},
  {path: 'dati-bancari', component: DatiBancariComponent},
  {path:'movimenti-carta', component:MovimentiCartaComponent},
  {path:'movimenti-conto', component:MovimentiContoComponent},
  {path: "", component:HomeComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}

