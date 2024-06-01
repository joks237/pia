import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportistiService {

  uri = 'http://localhost:4000'
  constructor(private http : HttpClient) { }

  sviSportisti(){
    return this.http.get(`${this.uri}/sportisti/sviSportisti`);
  }

  sportistiIme(ime) {
    const data= {
      ime:ime
    };

    return this.http.post(`${this.uri}/sportisti/sportistiIme`, data);
  }

  sviSportovi(){
    return this.http.get(`${this.uri}/sportovi/sviSportovi`);
  }
  sveDiscipline(){
    return this.http.get(`${this.uri}/sportovi/sveDiscipline`);
  }
  sportistiZemlja(zemlja) {
    const data= {
      zemlja : zemlja
    };

    return this.http.post(`${this.uri}/sportisti/sportistiZemlja`, data);
  }

  sportistiZemljaISport(zemlja, sport) {
    const data = {
      zemlja: zemlja,
      sport: sport
    };
    return this.http.post(`${this.uri}/sportisti/sportistiZemljaISport`, data);
  }

  sportistiSport(sport) {
    const data = {
      sport: sport
  }

  return this.http.post(`${this.uri}/sportisti/sportistiSport`, data);
}

sportDisciplina(sport) {
  const data = {sport:sport}

  return this.http.post(`${this.uri}/sportisti/sportDisciplina`, data);
}

dodajSportistu(ime_i_prezime, zemlja, sport, disciplina, pol) {
  const data = {
    ime_i_prezime : ime_i_prezime,
    zemlja:zemlja,
    sport: sport,
    disciplina:disciplina,
    pol: pol
  };
  return this.http.post(`${this.uri}/sportisti/dodajSportistu`,data);
}

sportistaJedanSport(ime_i_prezime) {
  const data = {
    ime_i_prezime : ime_i_prezime
  };

  return this.http.post(`${this.uri}/sportisti/sportistaJedanSport`,data);
}

sportistiSportDisciplina(sport, disciplina, pol) {
  const data = {
    sport: sport,
    disciplina: disciplina,
    pol:pol
}

return this.http.post(`${this.uri}/sportisti/sportistiSportDisciplina`, data);
}

sportistiDisciplina(disciplina, pol){
  const data = {
    disciplina: disciplina,
    pol:pol
  };

  return this.http.post(`${this.uri}/sportisti/sportistiDisciplina`,data);
}

}
