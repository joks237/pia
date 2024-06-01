import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-unossport',
  templateUrl: './unossport.component.html',
  styleUrls: ['./unossport.component.css']
})
export class UnossportComponent implements OnInit {

  constructor(private sportServis: SportService, private ruter: Router) { }

  ngOnInit(): void {
  }

  sport: string;
  naziv: string;
  vrsta: string;
  max: number;
  min: number;

  dodajSport(){
    this.sportServis.dodajSport(this.sport,this.naziv,this.vrsta, this.min,this.max).subscribe(
      res=>{
        console.log(res);
      }
    )
    this.ruter.navigate(['organizator']);
  }

  nazad(){
    this.ruter.navigate(['organizator']);
  }

}
