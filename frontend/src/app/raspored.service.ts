import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RasporedService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  rasporediId(idT){
    const data ={
      idT: idT
    };

    return this.http.post(`${this.uri}/raspored/rasporediId`,data)
  }

  sviTakmicari(){
    return this.http.get(`${this.uri}/raspored/sviTakmicari`)
  }

  dodajNoviRaspored(idT, takmicari, naziv, sport, disciplina,pol, lokacija){
    const data = {
      idT: idT,
      takmicari: takmicari,
      naziv: naziv,
      sport: sport,
      disciplina: disciplina,
      pol: pol,
      lokacija: lokacija
    }
    return this.http.post(`${this.uri}/raspored/dodajNoviRaspored`,data);
  }

  sviRasporedi(idT, naziv) {
    const data = {
      idT: idT,
      naziv: naziv
    };
  
    return this.http.post(`${this.uri}/raspored/sviRasporedi`,data)
  }
}
