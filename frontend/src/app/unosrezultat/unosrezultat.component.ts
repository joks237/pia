import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Raspored } from '../model/raspored';
import { RezMaleTrke } from '../model/rezMaleTrkePlivanje';
import { RezSkokBacanje } from '../model/rezSkokBacanje';
import { RezStreljastvo } from '../model/rezStreljastvo';
import { RezTenis } from '../model/rezTenis';
import { RezVeceTrke } from '../model/rezVeceTrke';
import { RezVelikeTrke } from '../model/rezVelikeTrke';
import { Sportista } from '../model/sportisti';
import { Takmicar } from '../model/takmicar';
import { Takmicenje } from '../model/takmicenje';

import { RasporedService } from '../raspored.service';
import { RezultatiService } from '../rezultati.service';
import { SportistiService } from '../sportisti.service';

import { TakmicenjeService } from '../takmicenje.service';
import { ZemljeService } from '../zemlje.service';

@Component({
  selector: 'app-unosrezultat',
  templateUrl: './unosrezultat.component.html',
  styleUrls: ['./unosrezultat.component.css']
})
export class UnosrezultatComponent implements OnInit {

  constructor(private zemljeServis: ZemljeService,
    private sportistiServis: SportistiService, private rezultatiServis: RezultatiService,private takmicenjeServis: TakmicenjeService, private ruter: Router, private rasporedServis: RasporedService) { }

  ngOnInit(): void {
    this.disciplina = null;
   
    this.idT = JSON.parse(localStorage.getItem('takmicenje'));
    console.log(this.idT)
    this.rasporedServis.rasporediId(this.idT).subscribe(
      (data: Raspored[])=>{
        console.log(data)
        if(data) this.rasporedTakmicenja = data;
        else console.log('greska pri dohvatanju rasporeda')
      }
    )
    this.takmicenjeServis.takmicenjeId(this.idT).subscribe(
      (data: Takmicenje)=>{
        if(data) {this.takmicenje = data;
        this.disciplina = data.disciplina}
      }
      
    )
    this.sportistiServis.sviSportisti().subscribe(
      (data: Sportista[])=>{
        if(data) this.sviSportisti = data;
        else console.log('greska pri dohvatanju sportista');
      }
    )
    this.rasporedServis.sviTakmicari().subscribe(
      (data: Takmicar[])=>{
        if(data) this.sviTakmicari = data;
        else console.log("greska pri dohvatanju takmicara")
      }
    )
this.flegZavrsiSkokBacanja = 0;
this.sportistiKojiDeleMesto= new Array();
this.takmicariTenis = new Array();
this.takmicariPolufinale2 = new Array();
this.takmicariPolufinale1 = new Array();
this.sportistiFinaleTenis = new Array();
this.sportistiTreceMesto = new Array();

}
  idT: number;
  rasporedTakmicenja: Raspored[];
  takmicenje: Takmicenje;
  takmicar: number;
  disciplina: string;
  brojTakmicara: number = 0;
  zavrsi: number = 0;
  sviSportisti: Sportista[];
  sviTakmicari: Takmicar[]
  //skokovi i bacanja

  prviPokusaj: number;
  drugiPokusaj: number;
  treciPokusaj: number;
  flegZavrsiSkokBacanja: number;
  sviRezSkokaBacanja: RezSkokBacanje[]
  prvaTri: RezSkokBacanje[];
  prvoMestoRez: number;
  drugoMestoRez: number;
  treceMestoRez: number;
  poruka: string;
  sportistiKojiDeleMesto: Takmicar[];
  ponovniPokusaj : boolean = false;
  idTakmicaraPonovo :number;
  ponovoPrvoDrugo : boolean = false;
  maxPokusajaPonovo : number = 0;

  //male trke
  rezultatMaleTrke : number;
  sviRezMaleTrke: RezMaleTrke[]
  prveTriMaleTrke : RezMaleTrke[]
  //velike trke

  rezultatVelikeTrke: string;
  sviRezVelikeTrke: RezVelikeTrke[];
  prveTriVelikeTrke : RezVelikeTrke[];
  prvoMestoRezVelikeTrke : string;
  drugoMestoRezVelikeTrke : string;
  treceMestoRezVelikeTrke : string;
  maxPokusajaPonovoString : string = "";

  //vece trke
  rezultatVeceTrke: string;
  sviRezVeceTrke: RezVeceTrke[];
  prveTriVeceTrke: RezVeceTrke[];
  prvoMestoRezVeceTrke: string;
  drugoMestoRezVeceTrke: string;
  treceMestoRezVeceTrke: string;

  //pucanje
  rezultatPucanje : number;
  sviRezPucanje: RezStreljastvo[];
  prvaTriPucanja: RezStreljastvo[];
  prvoMestoPucanje: number;
  drugoMestoPucanje: number;
  treceMestoPucanje: number;
  prvaSerija: number;
  drugaSerija: number;
  trecaSerija: number;
  cetvrtaSerija: number;
  petaSerija: number;
  sestaSerija: number;

//tenis
takmicariTenis: Takmicar[];
nazivTak: string;
set: number;
takmicariPolufinale1: Takmicar[]
takmicariPolufinale2 : Takmicar[]
zavrsenoPolufinale : boolean = false;

sviRezTenis : RezTenis[];
sortiraniTenis : RezTenis[];
sportistiFinaleTenis : Takmicar[]
sportistiTreceMesto : Takmicar[]
takmicarTreceMesto: number;
takmicarPrvoMesto: number;
setZaTrece : number
idTakZaTreceMesto : number;
maxPokusajaPonovoZaTrece : number = 0;


  unosBacanjeSkokovi(nazivRaspored){

    

    this.rezultatiServis.unosSkokBacanje(this.idT,nazivRaspored,this.takmicar,this.prviPokusaj,this.drugiPokusaj,this.treciPokusaj).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uneto')
      }
    )

  }

  unosBacanjeSkokovi1(idTak:number){
    if(this.maxPokusajaPonovo < Math.max(this.prviPokusaj, this.drugiPokusaj, this.treciPokusaj)){
      this.maxPokusajaPonovo = Math.max(this.prviPokusaj, this.drugiPokusaj, this.treciPokusaj);
      this.idTakmicaraPonovo = idTak;
    }


  }

zavrsiSkokBacanja(){

  this.rezultatiServis.prvaTri(this.idT).subscribe(
    (data: RezSkokBacanje[])=>{
      if(data) this.sviRezSkokaBacanja = data;
    
      console.log(this.sviRezSkokaBacanja);
     this.prvaTri =  this.sviRezSkokaBacanja.sort((a,b) =>  Math.max(b.prvi,b.drugi,b.treci) - Math.max(a.prvi, a.drugi,a.treci)).slice(0,3);

      this.prvoMestoRez = Math.max(this.prvaTri[0].prvi, this.prvaTri[0].drugi, this.prvaTri[0].treci);
      this.drugoMestoRez = Math.max(this.prvaTri[1].prvi, this.prvaTri[1].drugi, this.prvaTri[1].treci);
      this.treceMestoRez = Math.max(this.prvaTri[2].prvi, this.prvaTri[2].drugi, this.prvaTri[2].treci);

      if(this.prvoMestoRez == this.drugoMestoRez || this.drugoMestoRez == this.treceMestoRez) {
        if(this.prvoMestoRez == this.drugoMestoRez) {
          let sportista1 = this.sviTakmicari.find(t=> t.idS === this.prvaTri[0].idS)
          let sportista2 = this.sviTakmicari.find(t=> t.idS === this.prvaTri[1].idS)

          
          this.ponovniPokusaj = true;
          this.ponovoPrvoDrugo = true;
          this.sportistiKojiDeleMesto.push(sportista1);
          this.sportistiKojiDeleMesto.push(sportista2);
          console.log(this.sportistiKojiDeleMesto);
      
        let treceMesto = this.sviSportisti.find(s=>s.idS === this.prvaTri[2].idS);
        this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        } else {
          let sportista1 = this.sviTakmicari.find(t=> t.idS === this.prvaTri[1].idS)
          let sportista2 = this.sviTakmicari.find(t=> t.idS === this.prvaTri[2].idS)

          
          this.ponovniPokusaj = true;
          this.ponovoPrvoDrugo = false;
          this.sportistiKojiDeleMesto.push(sportista1);
          this.sportistiKojiDeleMesto.push(sportista2);
          console.log(this.sportistiKojiDeleMesto);
        let prvoMesto = this.sviSportisti.find(s=>s.idS === this.prvaTri[0].idS);
        this.zemljeServis.dodajMedalju(prvoMesto.zemlja, 1).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        }
      }
      else {
        console.log('usla u else granu za medalje');
        let prvoMesto = this.sviSportisti.find(s=> s.idS === this.prvaTri[0].idS);
        let drugoMesto = this.sviSportisti.find(s=> s.idS === this.prvaTri[1].idS);
        let treceMesto = this.sviSportisti.find(s=>s.idS === this.prvaTri[2].idS);
          this.zemljeServis.dodajMedalju(prvoMesto.zemlja,1).subscribe(
            res=>{
              if(res['message'] == 'ok') console.log('uspeh')
            }
          )
          this.zemljeServis.dodajMedalju(drugoMesto.zemlja, 2).subscribe(
            res=>{
              if(res['message'] == 'ok') console.log('uspeh')
            }
          )
          this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
            res=>{
              if(res['message'] == 'ok') console.log('uspeh')
            }
          )
            this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'
      }
    }
  )



}  

zavrsiSkokBacanja1(){
  let takmicar1mesto = this.sviSportisti.find(s=> s.idS == this.idTakmicaraPonovo);

  let idTak2 = this.sportistiKojiDeleMesto.find(s=>s.idS != this.idTakmicaraPonovo);
  let takmicar2mesto = this.sviSportisti.find(s=> s.idS == idTak2.idS);

  if(this.ponovoPrvoDrugo){
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja,1).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
  }else{
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 3).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    
  }

}

unosMaleTrke( naziv){
  
  this.rezultatiServis.unosMaleTrkePlivanje(this.idT, naziv, this.takmicar, this.rezultatMaleTrke).subscribe(
    res=>{
      if(res['message'] == 'ok') console.log('uneto');
    }
  )

}

zavrsiMaleTrke(){
  this.rezultatiServis.sviRezMaleTrke(this.idT).subscribe(
    (data: RezMaleTrke[])=>{
      if(data) this.sviRezMaleTrke = data;
      else console.log('greska pri dohvatanju rezultata malih trka ili plivanja');
      this.prveTriMaleTrke = this.sviRezMaleTrke.sort((a,b) => a.rezultat - b.rezultat).slice(0,3)
      this.prvoMestoRez = this.prveTriMaleTrke[0].rezultat;
      this.drugoMestoRez = this.prveTriMaleTrke[1].rezultat;
      this.treceMestoRez = this.prveTriMaleTrke[2].rezultat;

      if(this.prvoMestoRez == this.drugoMestoRez || this.drugoMestoRez == this.treceMestoRez) {
        if(this.prvoMestoRez == this.drugoMestoRez) {
          let sportista1 = this.sviTakmicari.find(t=> t.idS == this.prveTriMaleTrke[0].idS)
          let sportista2 = this.sviTakmicari.find(t=> t.idS == this.prveTriMaleTrke[1].idS)

          
          this.ponovniPokusaj = true;
          this.ponovoPrvoDrugo = true;
          this.sportistiKojiDeleMesto.push(sportista1);
          this.sportistiKojiDeleMesto.push(sportista2);
     
      
        let treceMesto = this.sviSportisti.find(s=>s.idS == this.prveTriMaleTrke[2].idS);
        this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'
        } else {
          let sportista1 = this.sviTakmicari.find(t=> t.idS == this.prveTriMaleTrke[1].idS)
          let sportista2 = this.sviTakmicari.find(t=> t.idS == this.prveTriMaleTrke[2].idS)

          this.ponovniPokusaj = true;
          this.ponovoPrvoDrugo = false;
          this.sportistiKojiDeleMesto.push(sportista1);
          this.sportistiKojiDeleMesto.push(sportista2);

        let prvoMesto = this.sviSportisti.find(s=>s.idS == this.prveTriMaleTrke[0].idS);
        this.zemljeServis.dodajMedalju(prvoMesto.zemlja, 1).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'
        }
      }  else {
        console.log('usla u else granu za medalje');
        let prvoMesto = this.sviSportisti.find(s=> s.idS === this.prveTriMaleTrke[0].idS);
        let drugoMesto = this.sviSportisti.find(s=> s.idS === this.prveTriMaleTrke[1].idS);
        let treceMesto = this.sviSportisti.find(s=>s.idS === this.prveTriMaleTrke[2].idS);
          this.zemljeServis.dodajMedalju(prvoMesto.zemlja,1).subscribe(
            res=>{
              if(res['message'] == 'ok') console.log('uspeh')
            }
          )
          this.zemljeServis.dodajMedalju(drugoMesto.zemlja, 2).subscribe(
            res=>{
              if(res['message'] == 'ok') console.log('uspeh')
            }
          )
          this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
            res=>{
              if(res['message'] == 'ok') console.log('uspeh')
            }
          )
            this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'
      }

    }

  
  )
}

unosMaleTrke1( idTak:number) {
  if(this.maxPokusajaPonovo < this.rezultatMaleTrke){
    this.maxPokusajaPonovo =this.rezultatMaleTrke;
    this.idTakmicaraPonovo = idTak;
  }
}

zavrsiMaleTrke1(){
  let takmicar1mesto = this.sviSportisti.find(s=> s.idS == this.idTakmicaraPonovo);

  let idTak2 = this.sportistiKojiDeleMesto.find(s=>s.idS != this.idTakmicaraPonovo);
  let takmicar2mesto = this.sviSportisti.find(s=> s.idS == idTak2.idS);

  if(this.ponovoPrvoDrugo){
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja,1).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

  }else{
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 3).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )

 this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

  }
}

unosVelikeTrke(naziv) {
  this.rezultatiServis.unosVelikeTrke(this.idT, naziv, this.takmicar, this.rezultatVelikeTrke).subscribe(
    res =>{
      if(res['message']== 'ok') console.log('uneto');
    }
  )
}

unosVelikeTrke1(idTak : number){
  if(this.maxPokusajaPonovoString < this.rezultatVelikeTrke){
    this.maxPokusajaPonovoString =this.rezultatVelikeTrke;
   
    this.idTakmicaraPonovo = idTak;
    console.log(this.idTakmicaraPonovo)
}
}


zavrsiVelikeTrke(){
  this.rezultatiServis.sviRezVelikeTrke(this.idT).subscribe(
    (data : RezVelikeTrke[])=>{
      if(data) this.sviRezVelikeTrke = data;
      else console.log('greska pri dohvatanju velikih trka');

      this.prveTriVelikeTrke = this.sviRezVelikeTrke.sort((a,b) => a.rezultat.localeCompare(b.rezultat)).slice(0,3);
      
      this.prvoMestoRezVelikeTrke = this.prveTriVelikeTrke[0].rezultat;
      this.drugoMestoRezVelikeTrke = this.prveTriVelikeTrke[1].rezultat;
      this.treceMestoRezVelikeTrke = this.prveTriVelikeTrke[2].rezultat;

      if(this.prvoMestoRezVelikeTrke == this.drugoMestoRezVelikeTrke || this.drugoMestoRezVelikeTrke == this.treceMestoRezVelikeTrke){
        if(this.prvoMestoRezVelikeTrke == this.drugoMestoRezVelikeTrke) {
          let sportista1 = this.sviTakmicari.find(t=> t.idS == this.prveTriVelikeTrke[0].idS)
          let sportista2 = this.sviTakmicari.find(t=> t.idS == this.prveTriVelikeTrke[1].idS)

          this.ponovniPokusaj = true;
          this.ponovoPrvoDrugo = true;
          this.sportistiKojiDeleMesto.push(sportista1);
          this.sportistiKojiDeleMesto.push(sportista2);
          console.log(this.sportistiKojiDeleMesto)
          let treceMesto = this.sviSportisti.find(s=>s.idS == this.prveTriVelikeTrke[2].idS);
        this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

        } else {
          let sportista1 = this.sviTakmicari.find(t=> t.idS == this.prveTriVelikeTrke[1].idS)
          let sportista2 = this.sviTakmicari.find(t=> t.idS == this.prveTriVelikeTrke[2].idS)

          this.ponovniPokusaj = true;
          this.ponovoPrvoDrugo = false;
          this.sportistiKojiDeleMesto.push(sportista1);
          this.sportistiKojiDeleMesto.push(sportista2);
          console.log(this.sportistiKojiDeleMesto)
          let prvoMesto = this.sviSportisti.find(s=>s.idS == this.prveTriVelikeTrke[0].idS);
          this.zemljeServis.dodajMedalju(prvoMesto.zemlja, 1).subscribe(
            res=>{
              if(res['message'] == 'ok') console.log('uspeh')
            }
          )
          this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'
          

        }
      } else {
        console.log('usla u else granu za medalje');
        let prvoMesto = this.sviSportisti.find(s=> s.idS === this.prveTriVelikeTrke[0].idS);
        let drugoMesto = this.sviSportisti.find(s=> s.idS === this.prveTriVelikeTrke[1].idS);
        let treceMesto = this.sviSportisti.find(s=>s.idS === this.prveTriVelikeTrke[2].idS);

        this.zemljeServis.dodajMedalju(prvoMesto.zemlja,1).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.zemljeServis.dodajMedalju(drugoMesto.zemlja, 2).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

      }
    }
  )
}
zavrsiVelikeTrke1(){
  console.log(this.idTakmicaraPonovo)
  let takmicar1mesto = this.sviSportisti.find(s=> s.idS == this.idTakmicaraPonovo);
  let idTak2 = this.sportistiKojiDeleMesto.find(s=>s.idS != this.idTakmicaraPonovo);
  let takmicar2mesto = this.sviSportisti.find(s=> s.idS == idTak2.idS);
  console.log(this.sportistiKojiDeleMesto)
  if(this.ponovoPrvoDrugo){
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja,1).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

  } else{
  console.log(takmicar1mesto)
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 3).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )

 this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

  }


}

unosVeceTrke(naziv) {
  this.rezultatiServis.unosVeceTrke(this.idT, naziv, this.takmicar, this.rezultatVeceTrke).subscribe(
    res=> {
      if(res['message'] == 'ok') console.log('uneto');
    }
  )
}

unosVeceTrke1(idTak: number) {
  if(this.maxPokusajaPonovoString < this.rezultatVeceTrke) {
    this.maxPokusajaPonovoString = this.rezultatVeceTrke;

    this.idTakmicaraPonovo = idTak;
    console.log(this.idTakmicaraPonovo)
  }
}

zavrsiVeceTrke(){
  this.rezultatiServis.sviRezVeceTrke(this.idT).subscribe(
    (data: RezVeceTrke[])=>{
      if(data) this.sviRezVeceTrke = data;
      else console.log('greska pri dohvatanju vece trka');

      console.log(this.sviRezVeceTrke)
      this.prveTriVeceTrke = this.sviRezVeceTrke.sort((a,b) => a.rezultat.localeCompare(b.rezultat)).slice(0,3);
      this.prvoMestoRezVeceTrke = this.prveTriVeceTrke[0].rezultat;
      this.drugoMestoRezVeceTrke = this.prveTriVeceTrke[1].rezultat;
      this.treceMestoRezVeceTrke = this.prveTriVeceTrke[2].rezultat;

      if(this.prvoMestoRezVeceTrke == this.drugoMestoRezVeceTrke || this.drugoMestoRezVeceTrke == this.treceMestoRezVeceTrke){
        if(this.prvoMestoRezVeceTrke == this.drugoMestoRezVeceTrke) {
          let sportista1 = this.sviTakmicari.find(t=> t.idS == this.prveTriVeceTrke[0].idS)
          let sportista2 = this.sviTakmicari.find(t=> t.idS == this.prveTriVeceTrke[1].idS)

          this.ponovniPokusaj = true;
          this.ponovoPrvoDrugo = true;
          this.sportistiKojiDeleMesto.push(sportista1);
          this.sportistiKojiDeleMesto.push(sportista2);
          console.log(this.sportistiKojiDeleMesto)
          let treceMesto = this.sviSportisti.find(s=>s.idS == this.prveTriVeceTrke[2].idS);
        this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'
        }else {
          let sportista1 = this.sviTakmicari.find(t=> t.idS == this.prveTriVeceTrke[1].idS)
          let sportista2 = this.sviTakmicari.find(t=> t.idS == this.prveTriVeceTrke[2].idS)

          this.ponovniPokusaj = true;
          this.ponovoPrvoDrugo = false;
          this.sportistiKojiDeleMesto.push(sportista1);
          this.sportistiKojiDeleMesto.push(sportista2);
          console.log(this.sportistiKojiDeleMesto)
          let prvoMesto = this.sviSportisti.find(s=>s.idS == this.prveTriVeceTrke[0].idS);
          this.zemljeServis.dodajMedalju(prvoMesto.zemlja, 1).subscribe(
            res=>{
              if(res['message'] == 'ok') console.log('uspeh')
            }
          )
          this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'
          

        }
      
      } else {
        console.log('usla u else granu za medalje');
        let prvoMesto = this.sviSportisti.find(s=> s.idS === this.prveTriVeceTrke[0].idS);
        let drugoMesto = this.sviSportisti.find(s=> s.idS === this.prveTriVeceTrke[1].idS);
        let treceMesto = this.sviSportisti.find(s=>s.idS === this.prveTriVeceTrke[2].idS);

        this.zemljeServis.dodajMedalju(prvoMesto.zemlja,1).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.zemljeServis.dodajMedalju(drugoMesto.zemlja, 2).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )
        this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

      }
    }
  )
}
zavrsiVeceTrke1(){
  let takmicar1mesto = this.sviSportisti.find(s=> s.idS == this.idTakmicaraPonovo);
  let idTak2 = this.sportistiKojiDeleMesto.find(s=>s.idS != this.idTakmicaraPonovo);
  let takmicar2mesto = this.sviSportisti.find(s=> s.idS == idTak2.idS);
  console.log(this.sportistiKojiDeleMesto)
  if(this.ponovoPrvoDrugo){
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja,1).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

  } else{
  console.log(takmicar1mesto)
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 3).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )

 this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

  }

}

unosPucanje(naziv) {
this.rezultatiServis.unosStreljstvo(this.idT, naziv,this.takmicar, this.prvaSerija,this.drugaSerija,this.trecaSerija,this.cetvrtaSerija,this.petaSerija,this.sestaSerija).subscribe(
  res=>{
    if(res['message'] == 'ok') console.log('uneto');
  }
)

}
unosPucanje1(idTak: number){
  if(this.maxPokusajaPonovo < (this.prvaSerija + this.drugaSerija+this.trecaSerija+this.cetvrtaSerija+this.petaSerija+this.sestaSerija)){
    this.maxPokusajaPonovo = this.prvaSerija + this.drugaSerija+this.trecaSerija+this.cetvrtaSerija+this.petaSerija+this.sestaSerija;
    this.idTakmicaraPonovo = idTak;
  }
}


zavrsiPucanje(){
  this.rezultatiServis.sviRezStreljastvo(this.idT).subscribe(
    (data: RezStreljastvo[])=>{
      if(data) this.sviRezPucanje = data;
      else console.log('greska pri dohvatanju rezultata pucanja');
      this.prvaTriPucanja = this.sviRezPucanje.sort((a,b) => (b.s1+b.s2+b.s3+b.s4+b.s5+b.s6) - (a.s1+a.s2+a.s3+a.s4+a.s5+a.s6) ).slice(0,3);

      this.prvoMestoPucanje = (this.prvaTriPucanja[0].s1 + this.prvaTriPucanja[0].s2+ this.prvaTriPucanja[0].s3+this.prvaTriPucanja[0].s4+this.prvaTriPucanja[0].s5+this.prvaTriPucanja[0].s6 )
      this.drugoMestoPucanje = (this.prvaTriPucanja[1].s1 + this.prvaTriPucanja[1].s2+ this.prvaTriPucanja[1].s3+this.prvaTriPucanja[1].s4+this.prvaTriPucanja[1].s5+this.prvaTriPucanja[1].s6 )
      this.treceMestoPucanje = (this.prvaTriPucanja[2].s1 + this.prvaTriPucanja[2].s2+ this.prvaTriPucanja[2].s3+this.prvaTriPucanja[2].s4+this.prvaTriPucanja[2].s5+this.prvaTriPucanja[2].s6 )
    if(this.prvoMestoPucanje == this.drugoMestoPucanje || this.drugoMestoPucanje == this.treceMestoPucanje) {
      if(this.prvoMestoPucanje == this.drugoMestoPucanje) {
        let sportista1 = this.sviTakmicari.find(t=> t.idS === this.prvaTriPucanja[0].idS)
        let sportista2 = this.sviTakmicari.find(t=> t.idS === this.prvaTriPucanja[1].idS)

        this.ponovniPokusaj = true;
        this.ponovoPrvoDrugo = true;

        this.sportistiKojiDeleMesto.push(sportista1);
        this.sportistiKojiDeleMesto.push(sportista2);
        console.log(this.sportistiKojiDeleMesto);

        let treceMesto = this.sviSportisti.find(s=>s.idS === this.prvaTriPucanja[2].idS);
        this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )

      } else {
        let sportista1 = this.sviTakmicari.find(t=> t.idS === this.prvaTriPucanja[1].idS)
        let sportista2 = this.sviTakmicari.find(t=> t.idS === this.prvaTriPucanja[2].idS)

        this.ponovniPokusaj = true;
        this.ponovoPrvoDrugo = false;
        this.sportistiKojiDeleMesto.push(sportista1);
        this.sportistiKojiDeleMesto.push(sportista2);

        let prvoMesto = this.sviSportisti.find(s=>s.idS === this.prvaTriPucanja[0].idS);
        this.zemljeServis.dodajMedalju(prvoMesto.zemlja, 1).subscribe(
          res=>{
            if(res['message'] == 'ok') console.log('uspeh')
          }
        )

      }
    } else {
      console.log('usla u else granu za medalje');
      let prvoMesto = this.sviSportisti.find(s=> s.idS === this.prvaTriPucanja[0].idS);
      let drugoMesto = this.sviSportisti.find(s=> s.idS === this.prvaTriPucanja[1].idS);
      let treceMesto = this.sviSportisti.find(s=>s.idS === this.prvaTriPucanja[2].idS);
      this.zemljeServis.dodajMedalju(prvoMesto.zemlja,1).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uspeh')
        }
      )
      this.zemljeServis.dodajMedalju(drugoMesto.zemlja, 2).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uspeh')
        }
      )
      this.zemljeServis.dodajMedalju(treceMesto.zemlja, 3).subscribe(
        res=>{
          if(res['message'] == 'ok') console.log('uspeh')
        }
      )
      this.poruka = 'Uspesno ste uneli rezultate takmicenja i medalje su dodeljene!'

       
    }
    
    }
  )
}
zavrsiPucanje1(){
  let takmicar1mesto = this.sviSportisti.find(s=> s.idS == this.idTakmicaraPonovo);

  let idTak2 = this.sportistiKojiDeleMesto.find(s=>s.idS != this.idTakmicaraPonovo);
  let takmicar2mesto = this.sviSportisti.find(s=> s.idS == idTak2.idS);

  if(this.ponovoPrvoDrugo){
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja,1).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
  }
  else{
    this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja, 2).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 3).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('uspeh')
      }
    )
    
  }
}

onSelected(nazivTakmicenja) :void {
  this.dohvatiTakmicare(nazivTakmicenja);
}

dohvatiTakmicare(nazivTakmicenja){
this.rasporedServis.sviRasporedi(this.idT, nazivTakmicenja).subscribe(
  (data: Raspored) =>{
    if(data) this.takmicariTenis = data.takmicari;
    else console.log('greska pri dohvatanju takmicara')
  }
)
}

unesiSet(naziv) {
  this.rezultatiServis.unosTenis(this.idT, naziv,this.takmicar,this.set).subscribe(
    res=>{
      if(res['message'] == 'ok') console.log('uneto');
    }
  )
}

zavrsiPolufinale(){
  if(this.takmicenje.takmicari.length == 4) {
  
    this.rasporedServis.sviRasporedi(this.idT, 'Polufinale1').subscribe(
      (data : Raspored) =>{
        console.log(data.takmicari)
        this.takmicariPolufinale1 = data.takmicari;
        this.rasporedServis.sviRasporedi(this.idT, 'Polufinale2').subscribe(
          (data : Raspored) =>{
            this.takmicariPolufinale2 = data.takmicari;

            this.rezultatiServis.sviRezTenis(this.idT).subscribe(
             (data : RezTenis[])=>{
               if(data) this.sviRezTenis = data;
              this.sortiraniTenis = this.sviRezTenis.sort((a,b)=> b.rezultat - a.rezultat);
              console.log(this.sortiraniTenis)

              let sportista1 = this.sviTakmicari.find(t=> t.idS == this.sortiraniTenis[0].idS)
              let sportista2 = this.sviTakmicari.find(t=> t.idS == this.sortiraniTenis[1].idS)

              this.sportistiFinaleTenis.push(sportista1)
              this.sportistiFinaleTenis.push(sportista2)
              console.log(this.sportistiFinaleTenis);

              this.zavrsenoPolufinale = true;

              let sportista3 = this.sviTakmicari.find(t => t.idS == this.sortiraniTenis[2].idS);
              let sportista4 = this.sviTakmicari.find(t => t.idS == this.sortiraniTenis[3].idS); 
            
              this.sportistiTreceMesto.push(sportista3);
              this.sportistiTreceMesto.push(sportista4)
              console.log(this.sportistiTreceMesto)

              this.ponovniPokusaj = true;
            }
            )

          }
        )
      }
    )
 
    
  }
}

unesiPrvoMesto(idTak: number){
  if(this.maxPokusajaPonovo < this.set) {
    this.maxPokusajaPonovo = this.set;
    this.idTakmicaraPonovo = idTak;
  }
}
unesiTreceMesto(idTak: number){
  if(this.maxPokusajaPonovoZaTrece < this.setZaTrece) {
    this.maxPokusajaPonovoZaTrece = this.setZaTrece;
    this.idTakZaTreceMesto = idTak;
  }
}

zavrsiPrvoMesto(){
  let takmicar1mesto = this.sviSportisti.find(s => s.idS == this.idTakmicaraPonovo);
  let idTak2 = this.sportistiFinaleTenis.find(s=> s.idS != this.idTakmicaraPonovo)
  let takmicar2mesto = this.sviSportisti.find(s => s.idS == idTak2.idS);

  this.zemljeServis.dodajMedalju(takmicar1mesto.zemlja, 1).subscribe(
    res=>{
      if(res['message'] == 'ok') console.log('uspeh')
    }
  )
  this.zemljeServis.dodajMedalju(takmicar2mesto.zemlja, 2).subscribe(
    res=>{
      if(res['message'] == 'ok') console.log('uspeh')
    }
  )
  this.poruka = 'Uspesno ste dodelili prvo i drugo mesto!'
}
zavrsiTreceMesto(){
  let takmicar3mesto = this.sviSportisti.find(s=> s.idS == this.idTakZaTreceMesto);
  
  this.zemljeServis.dodajMedalju(takmicar3mesto.zemlja, 3).subscribe(
    res=>{
      if(res['message'] == 'ok') console.log('uspeh')
    }
  )

  this.poruka = 'Uspesno ste dodelili trece mesto!'
}

nazad(){
  this.ruter.navigate(['delegat']);
}
}


 