import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllergieInterface } from '../../../allergie-interface';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-allergie-line',
  templateUrl: './allergie-line.component.html',
  styleUrls: ['./allergie-line.component.less']
})
export class AllergieLineComponent implements OnInit {
  // Data de l'élément ciblé
  @Input() element!: AllergieInterface;
  // Event de l'ouverture de popup que l'on remonte au parent
  @Output() openPopup = new EventEmitter<void>();
  // Couleur de la bordure
  @Input() borderColor!: string;
  // Titre des boutons d'actions. Le bouton autre est optionnel dans le cas d'une 3ème action voulue
  titleBtnUpdate: string = "Modifier l'allergie";
  titleBtnDelete: string = "Supprimer l'allergie";
  titleBtnOther: string = "troisième btn";
  // Icone du 3eme bouton d'action
  iconOtherBtn!: string;

  // Détermine la présence d'un troisième bouton d'action
  @Input() otherBtn: boolean = false;

  // Icones font awesome
  faEdit = faEdit;
  faRemove = faRemove;

  constructor() { }

  ngOnInit(): void {
  }

  // Fonction de callback qui emit l'évent de clic sur le bouton de confirmation
  openPopupEmit() {
    this.openPopup.emit();
  }
}
