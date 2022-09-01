import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'next-popin-simples',
  templateUrl: './popin-simples.component.html',
  styleUrls: ['./popin-simples.component.less']
})
export class PopinSimplesComponent implements OnInit {
  // Variable contenant le nombre
  title: any = '';
  // Variable qu'on enverra dans l'input
  inputVal: any = '';
  // Variable pour gérer la désactivation de la virgule
  disabled: string = '';
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
    this.inputVal = this.title;
    this.changing.next(false);
  }

  // Clic sur la gomme pour effacer un caractère
  erase(): void {
    if(this.title.slice(-1) == ','){
      this.disabled = '';
    }
    this.title = this.title.slice(0, -1); 
  }

    // Fonction d'ouverture de la popin
    openPopin(): void {
      this.changing.next(true);
    }

  // Fonction de fermeture de la popin
  closePopin(): void {
    this.changing.next(false);
  }

  // Fonction de fermeture de la popin et remplissage de l'input
  closePopinWithValue(event:any): void {
    this.inputVal = this.title;
    this.changing.next(false);
  } 
}