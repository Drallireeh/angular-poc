import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faRemove, faCode } from '@fortawesome/free-solid-svg-icons';
import { SlidingPanelService } from 'src/app/services/sliding-panel.service';

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

	// Event de clic sur le bouton de suppression
	@Output() deleteEvent = new EventEmitter<void>();
	// Event de clic sur le bouton de modification
	@Output() updateEvent = new EventEmitter<void>();
	// Event de clic sur le bouton "autre"
	@Output() customEvent = new EventEmitter<void>();

	// Fontawesome icones
	faEdit = faEdit;
	faRemove = faRemove;
	faCode = faCode;

	// Si on doit intéragir avec l'élément de la ligne, alors on a son id pour l'utiliser lors des clics sur les boutons
	@Input() elementId?: string;

	constructor() { }

	ngOnInit(): void {
	}

	updateClicked(): void {
		this.updateEvent.emit();
	}

	deleteClicked(): void {
		this.deleteEvent.emit();
	}
	
	otherClicked(): void {
		this.customEvent.emit();
	}
}
