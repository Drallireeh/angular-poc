import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Type } from '@angular/compiler';

@Component({
  selector: 'next-popin-double',
  templateUrl: './popin-double.component.html',
  styleUrls: ['./popin-double.component.less']
})
export class PopinDoubleComponent implements OnInit {
  // Variable contenant le nombre
  title: any = '';
  // Variable pour gérer la désactivation de la virgule
  disabled: string = '';

  data: Array<Array<string>> = [['g', 'mg'], ['l', 'ml']];
  topValue: string = this.data[0][0];
  botValue: string = this.data[1][0];

  mesureActuelle: string = this.data[0][0];
  mesure1: string = "forceFocus";
  mesure2: string = "";
  mesure3: string = "";
  mesure4: string = "";

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

  // Clic sur un chiffre primary pour écrire un nombre
  selectNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    this.title += number; 
  }

  // Clic sur la virgule, et désactivation du bouton si une virgule est présente
  selectVirgule(event: any): void {
    if(this.disabled != "disabled"){
      let number = event.target.closest('button').textContent;
      this.title += number;
      this.disabled = "disabled";
    }
  }

  // Clic sur un chiffre secondary qui ferme la popin après avoir ajouté au nombre ce qui est présent sur le bouton
  selectFinalNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    let popin = event.target.closest('next-popin-simples');

    // Si rien n'est présent dans le nombre, rajoute un 0 devant la virgule
    this.title == '' ? this.title = '0' + number : this.title += number;
    popin.parentNode.firstChild.value = this.title;
    this.changing.next(false);
  }

  selectDirectValue(event: any): void {
    let number = event.target.closest('button').textContent;
    let popin = event.target.closest('next-popin-double');

    popin.parentNode.firstChild.value = number;
    this.changing.next(false);
  }

  selectTopMesure(event: any): void {
    this.topValue = event.target.textContent;
    this.mesureActuelle = event.target.textContent;
  }

  selectMesure1(): void {
    this.mesure1 = "forceFocus";
    this.mesure2 = "";
    this.mesure3 = "";
    this.mesure4 = "";
  }

  selectMesure2(): void {
    this.mesure1 = "";
    this.mesure2 = "forceFocus";
    this.mesure3 = "";
    this.mesure4 = "";
  }

  selectBotMesure(event: any): void {
    this.botValue = event.target.textContent;
    this.mesureActuelle = event.target.textContent;
  }

  selectMesure3(): void {
    this.mesure1 = "";
    this.mesure2 = "";
    this.mesure3 = "forceFocus";
    this.mesure4 = "";
  }

  selectMesure4(): void {
    this.mesure1 = "";
    this.mesure2 = "";
    this.mesure3 = "";
    this.mesure4 = "forceFocus";
  }

  // Clic sur la gomme pour effacer un caractère
  erase(): void {
    if(this.title.slice(-1) == ','){
      this.disabled = '';
    }
    this.title = this.title.slice(0, -1); 
  }

  // Fonction de fermeture de la popin
  closePopin(): void {
    this.changing.next(false);
  }
}
