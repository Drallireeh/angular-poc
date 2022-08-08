import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementFromListInterface } from '../../../element-from-list-interface';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-element-from-list',
  templateUrl: './element-from-list.component.html',
  styleUrls: ['./element-from-list.component.less']
})
export class ElementFromListComponent implements OnInit {
  // Data de l'élément ciblé
  @Input() element!: ElementFromListInterface;
  // Event de l'ouverture de popup que l'on remonte au parent
  @Output() openPopup = new EventEmitter<void>();
  // Couleur de la bordure
  @Input() borderColor!: string;
  // Titre des boutons d'actions. Le bouton autre est optionnel dans le cas d'une 3ème action voulue
  @Input() titleBtnUpdate: string = "";
  @Input() titleBtnDelete: string = "";
  @Input() titleBtnOther!: string;
  // Icone du 3eme bouton d'action
  @Input() iconOtherBtn!: string;

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
