import { Component, OnInit } from '@angular/core';
import { Session } from '../classes/session';
import { Enfant } from '../classes/enfant';
import { InscriptionEnfant } from '../classes/inscription-enfant';
import { Parent } from '../classes/parent';
import { ProgrammeSemaine } from '../classes/programme-semaine';

@Component({
  selector: 'app-section-parent-inscription',
  templateUrl: './section-parent-inscription.component.html',
  styleUrls: ['./section-parent-inscription.component.scss']
})
export class SectionParentInscriptionComponent implements OnInit {

  parent: Parent;
  // programmeSemaine: Array<ProgrammeSemaine>;
  // inscriptionEnfant: Array<InscriptionEnfant>;
  sessionActuelle: Session;
  sessions: Array<Session> = new Array<Session>();

  constructor() {
    this.parent = new Parent(
      "0",
      "Simpson", 
      "Homer", 
      "simpson.homer@gmail.com", 
      "123 rue Springfield", 
      new Date("1960-04-08"), 
      "../../assets/img/profil.png", 
    );

    this.parent.ajouterEnfant(new Enfant(
      "1", 
      "Simpson", 
      "Lisa", 
      new Date("1990-06-09"), 
      "../../assets/img/profil.png", 
      "")
    );

    this.parent.ajouterEnfant(new Enfant(
      "2", 
      "Simpson", 
      "Bart", 
      new Date("1994-08-21"), 
      "../../assets/img/bart_mini.jpg", 
      "")
    );

    this.sessionActuelle = new Session(
      "S21", 
      "Session 2021", 
      "Session plein de plaisir", 
      new Date("2021-04-01"), 
      new Date("2021-08-01")
    );

    this.sessions.push(this.sessionActuelle);
    this.sessions.push(new Session(
      "S20", 
      "Session 2020", 
      "Session plein de plaisir", 
      new Date("2020-04-01"), 
      new Date("2020-08-01")
    ));

  }

  ngOnInit(): void {
  }

}
