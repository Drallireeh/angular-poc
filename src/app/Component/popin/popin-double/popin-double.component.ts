import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Type } from '@angular/compiler';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {formatDate} from '@angular/common';


@Component({
  selector: 'next-popin-double',
  templateUrl: './popin-double.component.html',
  styleUrls: ['./popin-double.component.less']
})
export class PopinDoubleComponent implements OnInit {
  // Variable contenant le nombre et la mesure
  title: any = '';
  // Variable qu'on enverra dans l'input
  inputVal: any = '';
  // Variable pour gérer la désactivation de la virgule
  disabled: string = '';
  // Variable contenant les datas que l'utilisateur renseigne
  data: Array<Array<string>> = [['g', 'mg'], ['l', 'ml']];
  // Récupération des variablse à inscrire dans la popin à l'init
  topValue: string = this.data[0][0];
  botValue: string = this.data[1][0];
  // Variable contenant la mesure en cours
  mesureActuelle: string = this.data[0][0];
  // Variables pour forcer le focus sur le bouton de mesure sélectionner
  mesure1: string = "forceFocus";
  mesure2: string = "";
  mesure3: string = "";
  mesure4: string = "";

  // Variable contenant l'icône du bouton
  faEdit = faEdit;

  // Boolean gérant l'affichage de la popin
  @Input() showPopin: boolean = false;

  // Boolean gérant l'affichage de la popin
  @Input() placeholderValue: string = ""; 

  // Variable du titre du header
  @Input() titleHeader: string = ""; 

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

    // Si rien n'est présent dans le nombre, rajoute un 0 devant la virgule
    this.title == '' ? this.title = '0' + number : this.title += number;
    this.inputVal = this.title + this.mesureActuelle;;
    this.changing.next(false);
  }

  // Clic sur un bouton de valeur préconstruite qui ferme la popin et remplit l'input
  selectDirectValue(event: any): void {
    let number = event.target.closest('button').textContent;
    this.inputVal = number;
    this.changing.next(false);
  }

  // Sélection d'une des mesures de la première ligne sur le clavier tactile
  selectTopMesure(event: any): void {
    this.topValue = event.target.textContent;
    this.mesureActuelle = event.target.textContent;
  }

  // Sélection de la première mesure de la première ligne du clavier tactile
  selectMesure1(): void {
    this.mesure1 = "forceFocus";
    this.mesure2 = "";
    this.mesure3 = "";
    this.mesure4 = "";
  }

  // Sélection de la seconde mesure de la première ligne du clavier tactile
  selectMesure2(): void {
    this.mesure1 = "";
    this.mesure2 = "forceFocus";
    this.mesure3 = "";
    this.mesure4 = "";
  }

  // Sélection d'une des mesures de la seconde ligne sur le clavier tactile
  selectBotMesure(event: any): void {
    this.botValue = event.target.textContent;
    this.mesureActuelle = event.target.textContent;
  }

  // Sélection de la première mesure de la seconde ligne du clavier tactile
  selectMesure3(): void {
    this.mesure1 = "";
    this.mesure2 = "";
    this.mesure3 = "forceFocus";
    this.mesure4 = "";
  }

  // Sélection de la seconde mesure de la seconde ligne du clavier tactile
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

  // Fonction d'ouverture de la popin
  openPopin(): void {
    this.changing.next(true);
  }

  // Fonction de fermeture de la popin et remplissage de l'input
  closePopinWithValue(event:any): void {
    this.inputVal = this.title + this.mesureActuelle;
    this.changing.next(false);
  } 
}
