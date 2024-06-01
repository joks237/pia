import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServis: UserService,
    private ruter: Router) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  poruka: string;
  user: User;

  login(){
    this.userServis.login(this.username, this.password).subscribe(
      (user: User)=>{
        if(user) {
          localStorage.setItem('ulogovan', JSON.stringify(user));
          if(user.type == 'organizator') {
            this.ruter.navigate(['organizator'])
          } else if(user.type == 'delegat') {
            this.ruter.navigate(['delegat'])
          } else 
        this.ruter.navigate(['vodja']);
        } else {
         this.poruka = "Incorrect username or password."
        }
      }
    )
  }


}
