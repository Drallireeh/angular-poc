import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'next-popin-horaire-simple',
  templateUrl: './popin-horaire-simple.component.html',
  styleUrls: ['./popin-horaire-simple.component.less']
})
export class PopinHoraireSimpleComponent implements OnInit {

  // Variable qui active / désactive la sélection d'horaire manuelle
  check: boolean = false;
  // Variable pour définir si l'on peut modifier la checkbox par clic natif
  click: boolean = false;
  // Variable des minutes pour le titre
  minute: string = "00";
  // Variable des heures pour le titre
  heure: string = "00";
  // Variable du formatée du titre
  title: any = `${this.heure}:${this.minute}`;

  // Boolean gérant l'affichage de la popin
  @Input() showPopin: boolean = false;

  // Subject permettant de gérer le changement de la variable d'affichage de la popin depuis d'autres composants
	@Input() changing!: Subject<boolean>;

  constructor() { }

  ngOnInit(): void {

    // Fonction pour changer le boolean qui gère l'affichage de la popin
    this.changing.subscribe(v => { 
			this.showPopin = v;
		  });
  }

  // Clic sur une case horaire préremplie et fermeture de la popin + remplissage de l'input
  selectFinalNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    let popin = event.target.closest('next-popin-horaire-simple');
    this.title = number
    popin.parentNode.firstChild.value = this.title;
    this.changing.next(false);
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
    this.title = `${this.heure}:${this.minute}`;
  };

  // Fonction de fermeture de la popin
  closePopin(): void {
    this.changing.next(false);
  }
}
