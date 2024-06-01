import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelegatComponent } from './delegat/delegat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MedaljeComponent } from './medalje/medalje.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { PrijavatakmicenjeComponent } from './prijavatakmicenje/prijavatakmicenje.component';
import { RegisterComponent } from './register/register.component';
import { SportistiComponent } from './sportisti/sportisti.component';
import { UnosrasporedComponent } from './unosraspored/unosraspored.component';
import { UnosrezultatComponent } from './unosrezultat/unosrezultat.component';
import { UnossportComponent } from './unossport/unossport.component';
import { UnossportistaComponent } from './unossportista/unossportista.component';
import { UnostakmicenjeComponent } from './unostakmicenje/unostakmicenje.component';
import { VodjaComponent } from './vodja/vodja.component';
import { ZahtevComponent } from './zahtev/zahtev.component';
import { ZemljeComponent } from './zemlje/zemlje.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'home', component: HomepageComponent},
  {path:'zemlje', component: ZemljeComponent},
  {path:'organizator', component: OrganizatorComponent},
  {path:'medalje', component: MedaljeComponent},
  {path:'delegat', component: DelegatComponent},
  {path:'vodja', component: VodjaComponent},
  {path:'sportisti', component: SportistiComponent},
  {path:'zahtev', component: ZahtevComponent},
  {path:'unossport', component: UnossportComponent},
  {path:'unostakmicenje', component: UnostakmicenjeComponent},
  {path:'unosraspored', component:UnosrasporedComponent},
  {path:'unosrezultat', component: UnosrezultatComponent},
  {path:'prijavatakmicenje', component: PrijavatakmicenjeComponent},
  {path:'unossportista', component: UnossportistaComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
