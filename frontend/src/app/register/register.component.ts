import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userServis: UserService,
    private ruter: Router) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  confirmPassword: string;
  name: string;
  lastname: string;
  nationality: string;
  email: string;
  type: string;
  poruka: string;



  register() {

    const validator = RegExp(/^(?!.*(.)\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/)

    if (!validator.test(this.password)) {
      this.poruka = "poruka ne zadovoljava format";
    }
    else {
      this.userServis.register(this.username, this.password, this.confirmPassword, this.name, this.lastname, this.nationality, this.email, this.type).subscribe(
        response => {
          if (response['message'] == 'user added') {
            this.ruter.navigate(['']);
          } else if (response['message'] == 'username exists') {
            this.poruka = 'Korisnik sa tim imenom vec postoji.';
          } else if (response['message'] == 'niste uneli sve podatke') {
            this.poruka = 'Niste uneli sve podatke';
          } else if (response['message'] == 'Ne poklapaju se lozinke') {
            this.poruka = 'Ne poklapaju se lozinke';
          } else if (response['message'] == 'Vec postoji vodja nacionalne delegacije za odabranu zemlju') {
            this.poruka = 'Vec postoji vodja nacionalne delegacije za odabranu zemlju';
          }
        }
      )
    }





  }
}