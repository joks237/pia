import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Raspored } from '../model/raspored';

import { Takmicar } from '../model/takmicar';
import { Takmicenje } from '../model/takmicenje';
import { RasporedService } from '../raspored.service';

import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-unosraspored',
  templateUrl: './unosraspored.component.html',
  styleUrls: ['./unosraspored.component.css']
})
export class UnosrasporedComponent implements OnInit {



  constructor(private rasporedServis: RasporedService,private servis: TakmicenjeService, private ruter: Router) { 
    this.finale = new Raspored;
    this.idT = 0;
    this.idT = JSON.parse(localStorage.getItem('takmicenje'));

    this.servis.takmicenjeId(this.idT).subscribe(
      (data: Takmicenje)=>{
   
        if(data){
          this.takmicenje = data;
          this.takmicari = data.takmicari;
          this.sport = data.sport;

      }else console.log('greska pri dohvatanju takmicenja');
      }
    )


      this.nizId = []
      this.takmicariPolufinale1 = new Array();
      this.takmicariPolufinale2 = new Array();
      this.takmicariCetvrtfinale1 = new Array();
      this.takmicariCetvrtfinale2 = new Array();
      this.takmicariCetvrtfinale3 = new Array();
      this.takmicariCetvrtfinale4 = new Array();
      this.sviRasporediTenisa = new Array();
      this.unosTenis = 0;
this.zavrsi = 0;
  }

  ngOnInit(): void {
  }



zavrsi: number;

  idT: number;
  takmicenje: Takmicenje;

  poruka: string;
  
  takmicari : Takmicar[];
  nizId: number[];


  finale: Raspored;
  svaTakmicenja : Takmicenje[];

  unosVreme: number = 0;

  vreme: string;
  datum: string;
  unosFinale: number = 0;
sport: String;
  //tenis

cetvrtfinale1: number;
cetvrtfinale2: number ;
cetvrtfinale3: number ;
cetvrtfinale4: number ;

polufinale1: number ;
polufinale2: number ;

finaleTenis: number;

takmicariPolufinale1: Takmicar[];
takmicariPolufinale2: Takmicar[];
takmicariCetvrtfinale1: Takmicar[];
takmicariCetvrtfinale2: Takmicar[];
takmicariCetvrtfinale3: Takmicar[];
takmicariCetvrtfinale4: Takmicar[];
unosTenis : number;
sviRasporediTenisa: Raspored[];
tak: string;



  unesi(idT, lokacija) {
    this.servis.unesiVreme(idT, lokacija, this.vreme, this.datum, this.finale.naziv).subscribe(
      res=>{
        this.poruka = res['message'];
      }
    )
    this.zavrsi++;
    
    this.servis.formiranRaspored(idT).subscribe(
      res=>{
        if(res['message'] == 'ok')
        this.ruter.navigate(['delegat']);
        else this.poruka = 'nije dobro'
      }
    )
    
    
  }
  unesiTenis(idT, lokacija){
    this.servis.unesiVreme(idT, lokacija, this.vreme, this.datum,this.tak).subscribe(
      res=>{
        this.poruka = res['message'];
      }
    )
this.zavrsi++;
if(this.takmicari.length == 4) {
  if(this.zavrsi == 2) {
    this.servis.formiranRaspored(idT).subscribe(
      res=>{
        if(res['message'] == 'ok')
        this.ruter.navigate(['delegat']);
        else this.poruka = 'nije dobro'
      }
    )
  }
    }
  }

  randomAlg(){

      this.servis.randomAlg("finale",  this.idT,this.takmicari,this.takmicenje.sport, this.takmicenje.disciplina, this.takmicenje.pol, 
        this.takmicenje.lokacija).subscribe(
          res=>{
            if(res['message'] == 'ok') this.poruka = 'Uspesno ste dodelili sportiste'
          }
        )

        this.servis.rasporedId(this.idT, 'finale').subscribe(
          (data:Raspored)=>{
            if(data) this.finale = data;
            else console.log('greska pri dohvatanju')
            
          }
        )
        console.log(this.idT)
         
          this.unosFinale = 1;
    

      this.unosVreme = 1;

    
  }

  randomAlgTenis(){
     console.log('tenis')
    if(this.takmicari.length == 4 || this.takmicari.length == 8) {
      if(this.takmicari.length == 4){
      let sportista1 = this.takmicari[0];
      let sportista2 = this.takmicari[1];
      let sportista3 = this.takmicari[2];
      let sportista4 = this.takmicari[3];

      this.takmicariPolufinale1.push(sportista1);
      this.takmicariPolufinale1.push(sportista2);
      this.takmicariPolufinale2.push(sportista3);
      this.takmicariPolufinale2.push(sportista4);


      this.rasporedServis.dodajNoviRaspored(this.idT, this.takmicariPolufinale1,'Polufinale1',this.takmicenje.sport,this.takmicenje.disciplina, this.takmicenje.pol,this.takmicenje.lokacija).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uneto');
        }
      )

      this.rasporedServis.dodajNoviRaspored(this.idT, this.takmicariPolufinale2,'Polufinale2',this.takmicenje.sport,this.takmicenje.disciplina, this.takmicenje.pol,this.takmicenje.lokacija).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uneto');
        }
      )
      this.unosTenis = 1;

    } else{

       let sportista1 = this.takmicari[0];
      let sportista2 = this.takmicari[1];
      let sportista3 = this.takmicari[2];
      let sportista4 = this.takmicari[3];
      let sportista5 = this.takmicari[4];
      let sportista6 = this.takmicari[5];
      let sportista7 = this.takmicari[6];
      let sportista8 = this.takmicari[7];

      this.takmicariCetvrtfinale1.push(sportista1);
      this.takmicariCetvrtfinale1.push(sportista2);
      this.takmicariCetvrtfinale2.push(sportista3);
      this.takmicariCetvrtfinale2.push(sportista4);
      this.takmicariCetvrtfinale3.push(sportista5);
      this.takmicariCetvrtfinale3.push(sportista6);
      this.takmicariCetvrtfinale4.push(sportista7);
      this.takmicariCetvrtfinale4.push(sportista8);
      
      this.rasporedServis.dodajNoviRaspored(this.idT, this.takmicariCetvrtfinale1,'Cetvrtfinale1',this.takmicenje.sport,this.takmicenje.disciplina, this.takmicenje.pol,this.takmicenje.lokacija).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uneto');
        }
      )

      this.rasporedServis.dodajNoviRaspored(this.idT, this.takmicariCetvrtfinale2,'Cetvrtfinale2',this.takmicenje.sport,this.takmicenje.disciplina, this.takmicenje.pol,this.takmicenje.lokacija).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uneto');
        }
      )

      this.rasporedServis.dodajNoviRaspored(this.idT, this.takmicariCetvrtfinale3,'Cetvrtfinale3',this.takmicenje.sport,this.takmicenje.disciplina, this.takmicenje.pol,this.takmicenje.lokacija).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uneto');
        }
      )

      this.rasporedServis.dodajNoviRaspored(this.idT, this.takmicariCetvrtfinale4,'Cetvrtfinale4',this.takmicenje.sport,this.takmicenje.disciplina, this.takmicenje.pol,this.takmicenje.lokacija).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uneto');
        }
      )
      this.unosTenis = 1;
    }
    this.rasporedServis.rasporediId(this.idT).subscribe(
      (data:Raspored[])=>{
        if(data) this.sviRasporediTenisa = data;
        else console.log('greska pri dohvatanju rasporeda');
    
      }
    )
  }
    else {
      this.poruka = 'Mora imati 4 ili 8 tenisera za baraz'
    }
  }




}
