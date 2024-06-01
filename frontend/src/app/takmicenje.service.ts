import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TakmicenjeService {

  uri = 'http://localhost:4000'
  constructor(private http: HttpClient) { }

  dodajTakmicenje(sport, disciplina, vrsta, pol, datum_poc, datum_kraj, lokacija,  delegat){
    const data = {
      sport: sport,
      disciplina: disciplina,
      vrsta: vrsta,
      pol:pol,
      datum_poc: datum_poc,
      datum_kraj: datum_kraj,
      lokacija: lokacija,
    
      delegat: delegat,

    };

    return this.http.post(`${this.uri}/takmicenje/dodajTakmicenje`, data);
  }

  svaTakmicenja(){
    return this.http.get(`${this.uri}/takmicenje/svaTakmicenja`);
  }

  unesiVreme(idT, lokacija, vreme_pocetka, datum, naziv) {
    const data = {
      idT: idT,
      lokacija: lokacija,
      vreme_pocetka: vreme_pocetka,
      datum: datum,
      naziv: naziv
    };

    return this.http.post(`${this.uri}/raspored/unesiVreme`, data);
  }

  vecFormirano(sport, disciplina) {
    const data = {
      sport: sport,
      disciplina : disciplina
    };

    return this.http.post(`${this.uri}/takmicenje/vecFormirano`,data)
  }

  dodajSportistu(idS, ime_i_prezime, disciplina, pol) {
    const data = {
      idS: idS,
      ime_i_prezime : ime_i_prezime,
      disciplina: disciplina,
     pol: pol
    };

    return this.http.post(`${this.uri}/takmicenje/dodajSportistu`, data)
  }
  
  delegatTakmicenje(delegat){
    const data = {
      delegat : delegat
    };

    return this.http.post(`${this.uri}/takmicenje/delegatTakmicenje`,data)
  }
  takmicenjeId(idT) {
    const data = {
      idT: idT
    }

    return this.http.post(`${this.uri}/takmicenje/takmicenjeId`,data)
  }

  randomAlg(naziv, idT, takmicari, sport, disciplina, pol, lokacija) {
    const data = {
      naziv: naziv,
     
        idT: idT,
        takmicari: takmicari,
        sport: sport,
        disciplina: disciplina,
        pol: pol,
        lokacija: lokacija
    };

    return this.http.post(`${this.uri}/raspored/randomAlg`,data)
}

sviTakmicari(){
  return this.http.get(`${this.uri}/takmicenje/sviTakmicari`);


}

rasporedId(idT, naziv){
  const data = {
    idT:idT,
    naziv: naziv
  };

  return this.http.post(`${this.uri}/raspored/rasporedid`,data)

}
formiranRaspored(idT) {
  const data = {
    idT: idT
  };

  return this.http.post(`${this.uri}/takmicenje/formiranRaspored`, data)
}


}
