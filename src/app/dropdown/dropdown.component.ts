import { Component, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilitiesService } from '../app.component';
import { DropdownContentComponent } from '../dropdown-content/dropdown-content.component';

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
	// Liste des options
	@ContentChildren(DropdownContentComponent) options!: QueryList<DropdownContentComponent>;
	// Event de clic en dehors de la dropdown pour la fermer
	clickOutsideSub!: Subscription;

	constructor(private utilitiesService: UtilitiesService, private eRef: ElementRef) { }

	ngOnInit(): void { }

	ngAfterViewInit(): void {
		// On sélectionne le premier élément de la dropdown, a changer pour sélectionner celui actif en tout temps
		this.selected = this.options.first.label;

		// On connecte l'évent de clic sur les options de cette dropdown
		this.options.forEach((option) => {
			option.selectEvent.subscribe(() => this.selectDropdownValue(option.label));
		});
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
	selectDropdownValue(label: string): void {
		this.selected = label;
		this.options.forEach((option) => {
			if (option.label === label) option.active = true;
			else option.active = false;
		});
	}
}
