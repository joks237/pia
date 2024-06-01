import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from '../model/discipline';
import { Sportista } from '../model/sportisti';
import { Sport } from '../model/sportovi';
import { User } from '../model/user';

import { SportistiService } from '../sportisti.service';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-prijavatakmicenje',
  templateUrl: './prijavatakmicenje.component.html',
  styleUrls: ['./prijavatakmicenje.component.css']
})
export class PrijavatakmicenjeComponent implements OnInit {

  constructor(private servisSport: SportistiService, private takmicenjeServis: TakmicenjeService, private ruter: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'))
    this.servisSport.sviSportovi().subscribe(
      (data: Sport[])=>{
        if(data) this.sportovi = data;
        
        else console.log("greska pri dohvatanju sportova")
      }
    )

  }
  korisnik : User;
  ime_i_prezime: string;
  sport:string;
  pol:string;
  sveDiscipline: Disciplina[];
  discipline: string[];
  sportovi: Sport[];
  poruka: string;

  dohvatiDisciplineZaOdabraniSport(odabraniSport) {
    this.servisSport.sportDisciplina(odabraniSport).subscribe(
      (data: Disciplina[])=>{
        this.sveDiscipline = data;  
      }
    )
  }

  onSelected(odabraniSport) :void {
    this.dohvatiDisciplineZaOdabraniSport(odabraniSport);
  }

  dodajSportistu(){

    this.servisSport.sportistaJedanSport(this.ime_i_prezime).subscribe(
      (data: Sportista)=>{
        if(data) {
          if(data.sport != this.sport) {
              this.poruka = 'Jedan sportista moze ucestvovati samo u jednom sportu'
          } else {
            if(this.discipline.length != 0) {
              for(var index in this.discipline) {
                this.takmicenjeServis.vecFormirano(this.sport, this.discipline[index]).subscribe(
                  res=>{
                    if(res['message'] == 'Takmicenje je formirano') this.poruka = 'Takmicenje je vec formirano';
                    else if(res['message'] == 'ok') {
                      this.servisSport.dodajSportistu(this.ime_i_prezime, this.korisnik.nationality ,this.sport,this.discipline[index],this.pol).subscribe(
                        res=>{
                          if(res['message'] == 'ok')this.poruka = 'Takmicar je dodat!';
                          else console.log('greska')
                        }
                      )
                    } else {
                      console.log('greska ogromna');
                    }
                }
              )
               
              }
            } else {
             
              this.takmicenjeServis.vecFormirano(this.sport, this.discipline).subscribe(
                res=>{
                  if(res['message'] == 'Takmicenje je formirano') this.poruka = 'Takmicenje je vec formirano';
                  else if(res['message'] == 'ok') {
                    this.servisSport.dodajSportistu(this.ime_i_prezime, this.korisnik.nationality ,this.sport,null,this.pol).subscribe(
                      res=>{
                        if(res['message'] == 'ok') this.poruka='Takmicar je dodat!';
                        else console.log('greska')
                      }
                    )
                  } else {
                    console.log('greska ogromna');
                  }
            }
              )}
          }
        } else {
          if(this.discipline.length != 0) {
            for(var index in this.discipline) {
              this.takmicenjeServis.vecFormirano(this.sport, this.discipline[index]).subscribe(
                res=>{
                  if(res['message'] == 'Takmicenje je formirano') this.poruka = 'Takmicenje je vec formirano';
                  else if(res['message'] == 'ok') {
                    this.servisSport.dodajSportistu(this.ime_i_prezime, this.korisnik.nationality ,this.sport,this.discipline[index],this.pol).subscribe(
                      res=>{
                        if(res['message'] == 'ok')this.poruka = 'Takmicar je dodat!';
                        else console.log('greska')
                      }
                    )
                  } else {
                    console.log('greska ogromna');
                  }
              }
            )
             
            }
          } else {
           
            this.takmicenjeServis.vecFormirano(this.sport, this.discipline).subscribe(
              res=>{
                if(res['message'] == 'Takmicenje je formirano') this.poruka = 'Takmicenje je vec formirano';
                else if(res['message'] == 'ok') {
                  this.servisSport.dodajSportistu(this.ime_i_prezime, this.korisnik.nationality ,this.sport,null,this.pol).subscribe(
                    res=>{
                      if(res['message'] == 'ok') this.poruka='Takmicar je dodat!';
                      else console.log('greska')
                    }
                  )
                } else {
                  console.log('greska ogromna');
                }
          }
            )}
        }
      }
    )


  }

  nazad(){
    this.ruter.navigate(['vodja']);
  }
}
