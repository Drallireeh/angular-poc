import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'next-popin-horaire-simple',
  templateUrl: './popin-horaire-simple.component.html',
  styleUrls: ['./popin-horaire-simple.component.less']
})
export class PopinHoraireSimpleComponent implements OnInit {

  check: boolean = false;
  click: boolean = false;

  minute: string = "00";
  heure: string = "00";
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

  // Clic sur un chiffre secondary qui ferme la popin après avoir ajouté au nombre ce qui est présent sur le bouton
  selectFinalNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    let popin = event.target.closest('next-popin-horaire-simple');
    this.title = number
    popin.parentNode.firstChild.value = this.title;
    this.changing.next(false);
  }

   selectHoraire(): void {
    this.check = true;
  };

  selectHeure(event: any): void {
    this.check = true;
    this.heure = event.target.value;
    this.updateTitle();
  };

  selectMinute(event: any): void {
    this.check = true;
    this.minute = event.target.value;
    this.updateTitle();
  };

  updateTitle(): void {
    this.title = `${this.heure}:${this.minute}`;
  };

  // Fonction de fermeture de la popin
  closePopin(): void {
    this.changing.next(false);
  }
}
