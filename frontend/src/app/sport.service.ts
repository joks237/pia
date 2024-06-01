import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  uri = 'http://localhost:4000'
  constructor(private http: HttpClient) { }

  dodajSport(sport, naziv, vrsta, min, max) {
    const data = {
      sport: sport,
      naziv: naziv,
      vrsta: vrsta,
      min: min,
      max: max
    };
    return this.http.post(`${this.uri}/organizator/dodajSport`,data)
  }

}
