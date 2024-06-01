import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Takmicenje } from '../model/takmicenje';
import { User } from '../model/user';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-delegat',
  templateUrl: './delegat.component.html',
  styleUrls: ['./delegat.component.css']
})
export class DelegatComponent implements OnInit {

  constructor(private servisTak: TakmicenjeService, private ruter: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.servisTak.delegatTakmicenje(this.korisnik.username).subscribe(
      (data: Takmicenje[])=>{
        if(data) this.mojaTakmicenja = data;
        else console.log("greska pri dovlacenju takmicenja");
      }
    )
      this.raspored = 1;
      this.rezultat = 0;

  }

  korisnik: User;
  mojaTakmicenja: Takmicenje[];
  raspored: number 
  rezultat: number

  unosRaspored(idT){
    localStorage.setItem('takmicenje', idT);
    this.ruter.navigate(['unosraspored']);

  }
  unosRezultat(idT){
    localStorage.setItem('takmicenje', idT);
    this.ruter.navigate(['unosrezultat'])
  }

  logout(){
    localStorage.clear();
    this.ruter.navigate([''])
  }
}
