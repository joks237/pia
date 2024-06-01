import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedaljeService } from '../medalje.service';
import { Medalje } from '../model/medalje';

@Component({
  selector: 'app-medalje',
  templateUrl: './medalje.component.html',
  styleUrls: ['./medalje.component.css']
})
export class MedaljeComponent implements OnInit {

  constructor(private servis: MedaljeService, private ruter: Router) { 
    this.servis.sveMedalje().subscribe(
      (data: Medalje[])=>{
        if(data) {this.medalje = data; 
          this.total = data.length;}
        else console.log('greska pri dovlacenju medalja')
      }
    )
  }

  ngOnInit(): void {
   
  }
  medalje: Medalje[];
  total: number;
page: number = 1;

home(){
  this.ruter.navigate(['home']);
}

}
