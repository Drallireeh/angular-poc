import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Type } from '@angular/compiler';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {formatDate} from '@angular/common';


@Component({
  selector: 'next-popin-datepicker',
  templateUrl: './popin-datepicker.component.html',
  styleUrls: ['./popin-datepicker.component.less']
})
export class PopinDatepickerComponent implements OnInit {

  // Variable qu'on enverra dans l'input
  inputVal: any = '';

  // Variable contenant l'icône du bouton
  faEdit = faEdit;

  // Boolean gérant l'affichage de la popin
  @Input() showPopin: boolean = false;

  // Boolean gérant l'affichage de la popin
  @Input() placeholderValue: string = ""; 

  // Variable du titre du header
  @Input() titleHeader: string = ""; 

  // Variable qui active / désactive la sélection d'horaire manuelle
  check: boolean = false;
  // Variable pour définir si l'on peut modifier la checkbox par clic natif
  click: boolean = false;
  // Variable des minutes pour le titre
  minute: string = "00";
  // Variable des heures pour le titre
  heure: string = "00";
  // titleDate
  titleDate: any = formatDate(new Date(),'dd/MM/yyyy', 'fr-FR');
  // title Horaire
  titleHoraire: string = '';
  // Variable contenant le nombre et la mesure
  title: any = this.titleDate + this.titleHoraire;
  // Subject permettant de gérer le changement de la variable d'affichage de la popin depuis d'autres composants
  changing: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {

    // Fonction pour changer le boolean qui gère l'affichage de la popin
    this.changing.subscribe(v => { 
			this.showPopin = v;
    });
  }

  // Clic sur un chiffre primary pour écrire un nombre
  selectNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    this.title += number; 
  }

    // Clic sur la ligne de la checkbox pour passer en saisie manuelle
    selectHoraire(): void {
      this.check = true;
    };
  
    // Changement de l'heure manuellement
    selectHeure(event: any): void {
      this.check = true;
      this.heure = event.target.value;
      this.updateTitle();
    };
  
    // Changement des minutes manuellement
    selectMinute(event: any): void {
      this.check = true;
      this.minute = event.target.value;
      this.updateTitle();
    };
  
    // Reformate le titre
    updateTitle(): void {
      this.titleHoraire = `${this.heure}:${this.minute}`;
      this.title = `${this.titleDate} ${this.titleHoraire}`;
    };
  // Fonction de fermeture de la popin
  closePopin(): void {
    this.changing.next(false);
  }

  // Fonction d'ouverture de la popin
  openPopin(): void {
    this.changing.next(true);
  }

  // Fonction de fermeture de la popin et remplissage de l'input
  closePopinWithValue(event:any): void {
    this.inputVal = this.title;
    this.changing.next(false);
  }
  date(value:string){
    this.titleDate = formatDate(new Date(value),'dd/MM/yyyy', 'fr-FR');
    this.title = `${this.titleDate} ${this.titleHoraire}`;
  }

  selectFinalHoraire(event:any){
    this.title = this.title = `${this.titleDate} ${event.target.innerText}`;
    this.inputVal = this.title;
    this.changing.next(false);
  }
}
