import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from '../model/discipline';
import { Sportista } from '../model/sportisti';
import { Sport } from '../model/sportovi';
import { Zemlja } from '../model/zemlja';
import { SportistiService } from '../sportisti.service';
import { ZemljeService } from '../zemlje.service';


@Component({
  selector: 'app-sportisti',
  templateUrl: './sportisti.component.html',
  styleUrls: ['./sportisti.component.css']
})



export class SportistiComponent implements OnInit {

  constructor(private servis: SportistiService, private zemljeServis: ZemljeService, private ruter: Router) { }

  ngOnInit(): void {
   this.zemljeServis.ucesnice().subscribe(
     (data: Zemlja[])=>{
       if(data) this.zemlje = data;
       else console.log("greska pri dovlacenju zemalja");
     }
   )
   this.servis.sviSportovi().subscribe(
    (data: Sport[])=>{
      if(data) this.sportovi = data;
      else console.log("greska pri dovlacenju zemalja");
    }
  )
  
   this.zemlja = "sve_zemlje";
   this.sport = "svi_sportovi"
  

  }

  sportisti: Sportista[];
  zemlje: Zemlja[];
  sportovi: Sport[];

  ime_i_prezime: string;
  zemlja: string;
  sport: string;
  
  total: number;
  page: number = 1;
  itemsPerPage: number = 10;

  pretraga(){
    if(this.ime_i_prezime!= null && this.ime_i_prezime != '') {
      this.servis.sportistiIme(this.ime_i_prezime).subscribe(
        (data: Sportista[])=>{
          if(data) {this.sportisti = data;this.total = this.sportisti.length}
          else console.log("greska pri dovlacenju sportista")
        }
      )
    } else {
    
      if(this.zemlja != 'sve_zemlje') {
        if(this.sport != 'svi_sportovi') { //odredjeni sport za neku zemlju
            this.servis.sportistiZemljaISport(this.zemlja, this.sport).subscribe(
              (data:Sportista[])=>{
                if(data) {this.sportisti = data;this.total = this.sportisti.length}
                else console.log("greska pri dovlacenju sportista")
                  }
            )
        } 
       else { //svi sportovi za neku zemlju
          this.servis.sportistiZemlja(this.zemlja).subscribe(
            (data:Sportista[])=>{
          if(data) {this.sportisti = data;this.total = this.sportisti.length}
          else console.log("greska pri dovlacenju sportista")
            }
          )
      }
    } 
     else {
       if(this.sport != 'svi_sportovi') //sport za sve zemlje
       {
         this.servis.sportistiSport(this.sport).subscribe(
          (data:Sportista[])=>{
            if(data) {this.sportisti = data;this.total = this.sportisti.length}
            else console.log("greska pri dovlacenju sportista")
              }
         )
       } else { //svi sportovi za sve zemlje
          this.servis.sviSportisti().subscribe(
            (data:Sportista[])=>{
              if(data) {this.sportisti = data;this.total = this.sportisti.length}
              else console.log("greska pri dovlacenju sportista")
                }
          )
       }
     }
    } 
}

home(){
  this.ruter.navigate(['']);
}


}