
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Zemlja } from '../model/zemlja';
import { ZemljeService } from '../zemlje.service';

@Component({
  selector: 'app-zemlje',
  templateUrl: './zemlje.component.html',
  styleUrls: ['./zemlje.component.css']
})
export class ZemljeComponent implements OnInit {

  

  constructor(private servis: ZemljeService, private ruter: Router) {
    this.servis.ucesnice().subscribe((podaci: Zemlja[])=>{
      this.zemlje = podaci;
      this.total = podaci.length;

    })
   }

  ngOnInit(): void {
    

  }

zemlje: Zemlja[];
total: number;
page: number = 1;


getLink(zemlja) {
  return `http://localhost:4000/${zemlja.slika}`
}

home(){
  this.ruter.navigate(['home']);
}







}
