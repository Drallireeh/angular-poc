import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'next-popin-horaire-simple',
  templateUrl: './popin-horaire-simple.component.html',
  styleUrls: ['./popin-horaire-simple.component.less']
})
export class PopinHoraireSimpleComponent implements OnInit {
  // Variable contenant le nombre
  title: any = '';
  // Variable pour gérer la désactivation de la virgule
  disabled: string = '';

  check: boolean = false;
  click: boolean = false;

  minute: string = "00";
  heure: string = "00";

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
    // let number = event.target.closest('button').textContent;
    // let popin = event.target.closest('next-popin-simples');

    // // Si rien n'est présent dans le nombre, rajoute un 0 devant la virgule
    // this.title == '' ? this.title = '0' + number : this.title += number;
    // popin.parentNode.firstChild.value = this.title;
    // this.changing.next(false);
  }

   selectHoraire(): void {
    this.check = true;
    console.log(this.minute, this.heure)
    this.title = this.heure + ':' + this.minute
  }

  // Fonction de fermeture de la popin
  closePopin(): void {
    this.changing.next(false);
  }
}
