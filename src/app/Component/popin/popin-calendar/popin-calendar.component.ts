import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {formatDate} from '@angular/common';


@Component({
  selector: 'next-popin-calendar',
  templateUrl: './popin-calendar.component.html',
  styleUrls: ['./popin-calendar.component.less']
})
export class PopinCalendarComponent implements OnInit {
  // Variable contenant le nombre et la mesure
  title: any = '';
  // Variable qu'on enverra dans l'input
  inputVal: any = '';

  // Variable contenant l'icône du bouton
  faEdit = faEdit;

  // Boolean gérant l'affichage de la popin
  @Input() showPopin: boolean = false;

  // Boolean gérant l'affichage de la popin
  @Input() placeholderValue: string = ""; 

  // Subject permettant de gérer le changement de la variable d'affichage de la popin depuis d'autres composants
  changing: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {

    // Fonction pour changer le boolean qui gère l'affichage de la popin
    this.changing.subscribe(v => { 
			this.showPopin = v;
    });
  }

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
    this.title = formatDate(new Date(value),'dd/MM/yyyy', 'fr-FR');
  }
}
