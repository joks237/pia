import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zahtev } from '../model/zahtev';
import { UserService } from '../user.service';

@Component({
  selector: 'app-organizator',
  templateUrl: './organizator.component.html',
  styleUrls: ['./organizator.component.css']
})
export class OrganizatorComponent implements OnInit {

  constructor(private servis: UserService, private ruter: Router) { }

  ngOnInit(): void {
    this.servis.sviZahtevi().subscribe(
      (data: Zahtev[])=>{
        if(data) {
this.zahtevi = data;
        } else {
          alert('greska pri dovlacenju zahteva')
        }
      
      }
    )
  }

  zahtevi: Zahtev[];

  prihvati(username){
    this.servis.prihvatiZahtev(username).subscribe(
      res=>{
        if(res['message'] == 'user added') alert('ok');
        else alert('nije ok');
      }
    )
  }
  odbij(username) {
    this.servis.odbijZahtev(username).subscribe(
      res=>{
        if(res['message'] == 'ok') console.log('sve ok')
      }
    )

  }

  odjava(){
    localStorage.clear();
    this.ruter.navigate(['home'])
  }

}
