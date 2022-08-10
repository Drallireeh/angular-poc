import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faRemove, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actions-inside-list',
  templateUrl: './actions-inside-list.component.html',
  styleUrls: ['./actions-inside-list.component.less']
})
export class ActionsInsideListComponent implements OnInit {
  // Titre des boutons d'actions
  @Input() titleUpdateBtn: string = "update";
  @Input() titleDeleteBtn: string = "delete";
  @Input() titleOtherBtn!: string;
  // Icone du 3eme bouton optionnel
  @Input() otherBtnIcon!: string;
  // Indique si on a un 3eme bouton
  @Input() otherBtn: boolean = false;

  // Fontawesome icones
  faEdit = faEdit;
  faRemove = faRemove;
  faCode = faCode;

  constructor() { }

  ngOnInit(): void {
  }

}
