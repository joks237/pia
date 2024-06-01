import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedaljeService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'


  sveMedalje(){
    return this.http.get(`${this.uri}/medalje/sveMedalje`);
  }

}
