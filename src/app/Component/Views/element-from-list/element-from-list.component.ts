import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementFromListInterface } from '../../../element-from-list-interface';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-element-from-list',
	templateUrl: './element-from-list.component.html',
	styleUrls: ['./element-from-list.component.less']
})
export class ElementFromListComponent implements OnInit {
	@Input() element!: ElementFromListInterface;
	@Output() openPopup = new EventEmitter<void>();
	@Input() borderColor!: string;

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
