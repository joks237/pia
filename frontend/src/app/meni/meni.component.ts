import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-meni',
  templateUrl: './meni.component.html',
  styleUrls: ['./meni.component.css']
})
export class MeniComponent implements OnInit {

  constructor( private ruter: Router) { }

  ngOnInit(): void {
  }

  odjava(){
    localStorage.clear();
    this.ruter.navigate[('')];
  }

}
