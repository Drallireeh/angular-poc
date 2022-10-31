import { Component, OnInit, Input } from '@angular/core';
import { MedicamentAllergie } from 'src/app/medicament-allergie-interface';

@Component({
	selector: 'app-liste-med-to-add-allergie',
	templateUrl: './liste-med-to-add-allergie.component.html',
	styleUrls: ['./liste-med-to-add-allergie.component.less']
})
export class ListeMedToAddAllergieComponent implements OnInit {
	@Input() listeMedicaments: MedicamentAllergie[] = [
		{
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			label: 'AAZ COVID-VIRO test antigénique'
		},
		{
			label: 'AAZ COVID-VIRO test antigénique'
		}
	]

	constructor() { }

	ngOnInit(): void {
	}

	selectLine(medicament: any) {
		console.log(medicament)
		medicament.selected = !medicament.selected
		// TODO set med selected
	}
}
