import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Zemlja } from './model/zemlja';

@Injectable({
  providedIn: 'root'
})
export class ZemljeService {

  url = "http://localhost:4000"

  constructor(private http: HttpClient) { }

  ucesnice() {
    return this.http.get(`${this.url}/zemlje/ucesnice`);
  }

  dodajMedalju(zemlja, mesto){
    const data = {
      zemlja: zemlja,
      mesto: mesto
    };

    return this.http.post(`${this.url}/medalje/dodajMedalju`,data);
  }
  
}
