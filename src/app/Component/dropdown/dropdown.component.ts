import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilitiesService } from '../../app.component';
import { DropdownOption } from '../../dropdown-option';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {
	// Value selected
	@Input() selected: string = '0';
	// Dropdown ouverte ou fermée
	dropdownActive: boolean = false;
	// Si on est en présence d'une popin on ajoute une classe spé
	@Input() isPopin?: boolean = false;
	// Liste des options de la dropdown
	@Input() dropdownOptions: Array<DropdownOption> = [];
	// Event de clic en dehors de la dropdown pour la fermer
	clickOutsideSub!: Subscription;
	// Callbakc on select
	@Output() onSelect = new EventEmitter<DropdownOption>()
	// Callbakc on change
	@Output() onChange = new EventEmitter<DropdownOption>()

	constructor(private utilitiesService: UtilitiesService, private eRef: ElementRef) { }

	ngOnInit(): void {
	}

	onClick(): void {
		// On set la dropdown à on / off
		this.dropdownActive = !this.dropdownActive;
		// Si elle est ouverte on connecte le clic qui permet de cacher la dropdown en cas de clic hors dd, sinon on le déconnecte
		if (this.dropdownActive) this.clickOutsideSub = this.utilitiesService.documentClickedTarget.subscribe(target => this.documentClickListener(target))
		else this.clickOutsideSub.unsubscribe();
	}

	// Event de clic en dehors de la dropdown
	documentClickListener(target: any): void {
		if (!this.eRef.nativeElement.contains(target)) {
			this.clickOutsideSub.unsubscribe();
			this.dropdownActive = false;
		}
	}

	// Sélection de la valeur de la dropdown
	selectDropdownValue(optionClicked: DropdownOption): void {
		if (this.selected !== optionClicked.label) this.onChange.emit(optionClicked);
		this.dropdownOptions.map((option) => {
			option.active = false;
		})
		this.selected = optionClicked.label;
		optionClicked.active = true;
		this.onSelect.emit(optionClicked);
	}

	ngOnDestroy() {
		this.clickOutsideSub.unsubscribe()
	}
}
