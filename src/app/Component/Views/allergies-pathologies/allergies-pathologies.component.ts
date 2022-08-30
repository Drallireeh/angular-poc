import { Component, Input, OnInit } from '@angular/core';
import { DropdownOption } from 'src/app/dropdown-option';
import { SlidingPanelService } from 'src/app/services/sliding-panel.service';

@Component({
	selector: 'app-allergies-pathologies',
	templateUrl: './allergies-pathologies.component.html',
	styleUrls: ['./allergies-pathologies.component.less']
})
export class AllergiesPathologiesComponent implements OnInit {
	pokemon: any;
	// représente les dropdown utilisées dans le panel heading
	@Input() dropdownStatus: Array<DropdownOption> = [{ value: '0', label: 'Tous les status' }, { value: '1', label: 'Aucune' }, { value: '2', label: 'Allergie' }, { value: '3', label: 'Hypersensibilité' }];
	@Input() dropdownTypes: Array<DropdownOption> = [{ value: '0', label: 'Toutes les types' }, { value: '1', label: 'Aucun' }, { value: '2', label: 'Classe' }, { value: '3', label: 'Substance' }, { value: '4', label: 'Médicaments' }];
	@Input() dropdownPopin: Array<DropdownOption> = [{ value: '0', label: 'mg' }, { value: '1', label: 'g' }, { value: '2', label: 'kg' }];

	constructor(private slidingSrv: SlidingPanelService) { }

	ngOnInit(): void {
	}

	onSelectStatus(e: DropdownOption) {
		console.log("select")
		console.log(e);
	}

	onChangeStatus(e: DropdownOption) {
		console.log("change")
		console.log(e);
	}

	addAllergie(mode: number) {
		this.slidingSrv.emitOpenPanel("addAllergiePanel");
	}
}
