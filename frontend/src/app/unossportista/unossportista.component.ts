import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sportista } from '../model/sportisti';
import { SportistiService } from '../sportisti.service';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-unossportista',
  templateUrl: './unossportista.component.html',
  styleUrls: ['./unossportista.component.css']
})
export class UnossportistaComponent implements OnInit {

  constructor(private ruter: Router, 
    private servis : SportistiService, private servisTak : TakmicenjeService) { }

  ngOnInit(): void {
    this.servis.sportistiSportDisciplina(this.sport,this.disciplina,this.pol).subscribe(
      (data: Sportista[])=>{
        if(data) this.sportisti = data;
        else console.log('greska pri dovlacenju sportista');
      }
    )
  }

  sportisti: Sportista[];
  sport = JSON.parse(localStorage.getItem('sport'));
  disciplina = JSON.parse(localStorage.getItem('disciplina'));


  pol = JSON.parse(localStorage.getItem('pol'))

  poruka : string;


  dodaj(idS, ime_i_prezime){

    this.servisTak.dodajSportistu(idS, ime_i_prezime, this.disciplina, this.pol).subscribe(
      res=>{
        if(res['message'] == 'ok') this.poruka = 'Uspesno ste dodali takmicara'
        else this.poruka = "Nesto nije u redu"
      }
    )
 
  }

  nazad(){
    this.ruter.navigate(['organizator'])
  }
}
