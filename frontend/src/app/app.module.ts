import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ZemljeComponent } from './zemlje/zemlje.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { MedaljeComponent } from './medalje/medalje.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { SportistiComponent } from './sportisti/sportisti.component';
import { DelegatComponent } from './delegat/delegat.component';
import { VodjaComponent } from './vodja/vodja.component';
import { ZahtevComponent } from './zahtev/zahtev.component';
import { UnossportComponent } from './unossport/unossport.component';
import { UnostakmicenjeComponent } from './unostakmicenje/unostakmicenje.component';
import { UnosrasporedComponent } from './unosraspored/unosraspored.component';
import { UnosrezultatComponent } from './unosrezultat/unosrezultat.component';
import { PrijavatakmicenjeComponent } from './prijavatakmicenje/prijavatakmicenje.component';
import { UnossportistaComponent } from './unossportista/unossportista.component';
import { MeniComponent } from './meni/meni.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    ZemljeComponent,
    OrganizatorComponent,
    MedaljeComponent,
    SportistiComponent,
    DelegatComponent,
    VodjaComponent,
    ZahtevComponent,
    UnossportComponent,
    UnostakmicenjeComponent,
    UnosrasporedComponent,
    UnosrezultatComponent,
    PrijavatakmicenjeComponent,
    UnossportistaComponent,
    MeniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
