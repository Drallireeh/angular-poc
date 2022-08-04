import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-next-popup-simple',
	templateUrl: './next-popup-simple.component.html',
	styleUrls: ['./next-popup-simple.component.less']
})
export class NextPopupSimpleComponent implements OnInit {
	// AFfiche / cache la window 
	@Input() isOpen: boolean = false;
	// Indique si la popup est une popup de confirmation ou seulement d'alerte
	@Input() confirmPopup: boolean = false;
	// Titre 
	@Input() title: string = "Titre de la popup";
	// Texte du bouton de confirmation
	@Input() confirmationText: string = "Ok";
	// Texte du bouton d'annulation
	@Input() annulationText: string = "Annuler";
	// Titre 
	@Input() icone: string = "next-icon-question";
	// Taille de popup
	@Input() width: number = 450;
	// Emitter de l'event de confirmation
	@Output() confirmCallbackEvent = new EventEmitter<void>();

	@Input() changing!: Subject<boolean>;

	constructor() { }

	ngOnInit(): void {
		this.changing.subscribe(v => { 
			this.isOpen = v;
		  });
	}

	// Fonction de callback qui emit l'évent de clic sur le bouton de confirmation
	confirmCallback(): void{
		this.confirmCallbackEvent.emit();
		this.closeWindow();
	}

	closeWindow(): void  {
		this.changing.next(false);
	}
}
