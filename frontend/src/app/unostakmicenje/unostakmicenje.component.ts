import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { TakmicenjeService } from '../takmicenje.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-unostakmicenje',
  templateUrl: './unostakmicenje.component.html',
  styleUrls: ['./unostakmicenje.component.css']
})
export class UnostakmicenjeComponent implements OnInit {

  constructor(private takmicenjeServis: TakmicenjeService, private userServis: UserService, private ruter: Router) { }

  ngOnInit(): void {
    this.userServis.sviDelegati().subscribe(
      (data: User[])=>{
        if(data) this.delegati = data;
        else console.log('greska pri dovlacenju delegata');
      }
    )
  }
  sport: string;
  disciplina:string;
  vrsta: string;
  pol: string;
  datum_poc: string;
  datum_kraj: string;
  lokacija: string;
 
 
  delegati : User[];
  delegat: string;
  poruka: string;

  dodajTakmicenje(){

 
    localStorage.setItem('sport',JSON.stringify( this.sport));
    localStorage.setItem('disciplina',JSON.stringify( this.disciplina));
    localStorage.setItem('pol',JSON.stringify( this.pol));



   
    
    this.takmicenjeServis.dodajTakmicenje(this.sport,this.disciplina,this.vrsta,this.pol,this.datum_poc, this.datum_kraj,this.lokacija, this.delegat).subscribe(
     res=>{
       
       if(res['message'] == 'ok') this.poruka = 'Uspesno ste uneli takmicenje';
       else this.poruka = 'Izaberite drugog delegata(jedan delegat na najvise tri takmicenja)';
        
     }
    )

    this.ruter.navigate(['unossportista']);
  }

  nazad(){
    this.ruter.navigate(['organizator'])
  }

}
