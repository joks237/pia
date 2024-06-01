import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:4000"
  constructor(private http: HttpClient) { }

  register(username, password, confirmPassword, name, lastname, nationality, email, type){
    const data = {
      username: username,
      password: password,
      confirmPassword:confirmPassword,
      name: name,
      lastname: lastname,
      nationality:nationality,
      email:email,
      type:type
    }

    return this.http.post(`${this.url}/korisnici/register`,data);
  }

  login(username, password){
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.url}/korisnici/login`,data);
  }

  prihvatiZahtev(username) {
    const data = {
      username:username
    }

    return this.http.post(`${this.url}/organizator/prihvatiZahtev`,data)
  }

  sviZahtevi(){
    return this.http.get(`${this.url}/organizator/sviZahtevi`)
  }
  odbijZahtev(username){
    const data = {
      username:username
    }

    return this.http.post(`${this.url}/organizator/odbijZahtev`,data)

  }

  sviDelegati(){
    return this.http.get(`${this.url}/korisnici/sviDelegati`);
  }
}
