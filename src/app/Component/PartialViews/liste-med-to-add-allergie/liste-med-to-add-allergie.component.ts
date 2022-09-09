import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-liste-med-to-add-allergie',
	templateUrl: './liste-med-to-add-allergie.component.html',
	styleUrls: ['./liste-med-to-add-allergie.component.less']
})
export class ListeMedToAddAllergieComponent implements OnInit {
	@Input() listeMedicaments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 1, 4, 5, 5];

	constructor() { }

	ngOnInit(): void {
	}

	selectLine(medicament: any) {
		console.log(medicament)
		// TODO set med selected
	}
}
