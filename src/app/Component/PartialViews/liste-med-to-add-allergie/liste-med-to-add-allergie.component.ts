import { Component, OnInit, Input } from '@angular/core';
import { THRESHOLD_DIFF } from '@progress/kendo-angular-popup/services/scrollable.service';
import { MedicamentAllergie } from 'src/app/medicament-allergie-interface';

@Component({
	selector: 'app-liste-med-to-add-allergie',
	templateUrl: './liste-med-to-add-allergie.component.html',
	styleUrls: ['./liste-med-to-add-allergie.component.less']
})
export class ListeMedToAddAllergieComponent implements OnInit {
	@Input() listeMedicaments: MedicamentAllergie[] = [
		{
			id: 1,
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			id: 2,
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			id: 3,
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			id: 4,
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			id: 5,
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			id: 6,
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			id: 7,
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			id: 8,
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			id: 9,
			label: 'AAZ COVID-VIRO test antigénique'
		}
	]

	listeMedSelected: MedicamentAllergie[] = [];

	constructor() { }

	ngOnInit(): void {
	}

	selectLine(medicament: any) {
		medicament.selected = !medicament.selected;

		let indexMed = this.listeMedSelected.findIndex(med => med.id === medicament.id);
		if (medicament.selected) {
			this.listeMedSelected.push(medicament);
		} else {
			this.listeMedSelected.splice(indexMed, 1);
		}

		console.log(this.listeMedSelected)
	}
}
