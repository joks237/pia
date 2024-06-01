import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RezultatiService {

constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  unosSkokBacanje(idT,nazivRasporeda, idS, prvi, drugi, treci){
    const data = {
      idT: idT,
      nazivRasporeda: nazivRasporeda,
      idS: idS,
      prvi:prvi,
      drugi:drugi,
      treci:treci
    };

    return this.http.post(`${this.uri}/rezultati/unosBacanjeSkokovi`,data)
  }

  

  prvaTri(idT) {
    const data = {
      idT: idT
    };
    return this.http.post(`${this.uri}/rezultati/prvaTri`, data);
  }

  unosMaleTrkePlivanje(idT, nazivRasporeda, idS, rezultat) {
    const data ={
      idT: idT,
      nazivRasporeda: nazivRasporeda,
      idS: idS,
      rezultat: rezultat
    };

    return this.http.post(`${this.uri}/rezultati/unosMaleTrkePlivanje`,data)
  }

  sviRezMaleTrke(idT) {
    const data ={
      idT: idT
    };

    return this.http.post(`${this.uri}/rezultati/sviRezMaleTrke`,data)
  }

  sviRezVelikeTrke(idT) {
    const data ={
      idT: idT
    };

    return this.http.post(`${this.uri}/rezultati/sviRezVelikeTrke`,data)
  
  }
  unosVelikeTrke(idT, nazivRasporeda, idS, rezultat) {
    const data ={
      idT: idT,
      nazivRasporeda: nazivRasporeda,
      idS: idS,
      rezultat: rezultat
    };

    return this.http.post(`${this.uri}/rezultati/unosVelikeTrke`,data)
  }

  sviRezVeceTrke(idT) {
    const data ={
      idT: idT
    };

    return this.http.post(`${this.uri}/rezultati/sviRezVeceTrke`,data)
  
  }

  unosVeceTrke(idT, nazivRasporeda, idS, rezultat) {
    const data ={
      idT: idT,
      nazivRasporeda: nazivRasporeda,
      idS: idS,
      rezultat: rezultat
    };

    return this.http.post(`${this.uri}/rezultati/unosVeceTrke`,data)
  }

sviRezStreljastvo(idT) {
  const data ={
    idT: idT
  };

  return this.http.post(`${this.uri}/rezultati/sviRezStreljastvo`,data)

}

unosStreljstvo(idT, nazivRasporeda, idS, s1, s2, s3,s4,s5,s6) {
  const data = {
    idT: idT,
    nazivRasporeda: nazivRasporeda,
    idS: idS, 
    s1:s1,
    s2:s2,
    s3:s3,
    s4:s4,
    s5:s5,
    s6:s6
  }

  return this.http.post(`${this.uri}/rezultati/unosStreljastvo`,data);
}

unosTenis(idT, nazivRasporeda, idS, rezultat) {
  const data ={
    idT: idT,
    nazivRasporeda: nazivRasporeda,
    idS: idS,
    rezultat: rezultat
  };

return this.http.post(`${this.uri}/rezultati/unosTenis`,data)

}

sviRezTenis(idT) {
  const data = {
    idT: idT
  }

  return this.http.post(`${this.uri}/rezultati/sviRezTenis`,data)
}
  
}
