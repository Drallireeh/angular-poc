import { Component, Input, OnInit } from '@angular/core';
import { AllergieInterface } from '../../../allergie-interface';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { AllergiesService } from 'src/app/services/allergies.service';
import { SlidingPanelService } from 'src/app/services/sliding-panel.service';
import { LineIdService } from 'src/app/services/line-id.service';

@Component({
	selector: 'app-allergie-line',
	templateUrl: './allergie-line.component.html',
	styleUrls: ['./allergie-line.component.less']
})
export class AllergieLineComponent implements OnInit {
	// Data de l'élément ciblé
	@Input() element!: AllergieInterface;
	// Couleur de la bordure
	@Input() borderColor!: string;
	// Titre des boutons d'actions. Le bouton autre est optionnel dans le cas d'une 3ème action voulue
	titleBtnUpdate: string = "Modifier l'allergie";
	titleBtnDelete: string = "Supprimer l'allergie";
	titleBtnOther: string = "troisième btn";
	// Icone du 3eme bouton d'action
	iconOtherBtn!: string;

	// Détermine la présence d'un troisième bouton d'action
	@Input() otherBtn: boolean = false;

	// Icones font awesome
	faEdit = faEdit;
	faRemove = faRemove;

	constructor(private allergieSrv: AllergiesService, private spServ: SlidingPanelService, private idSrv: LineIdService) { }

	ngOnInit(): void {
	}

	updateAllergie(): void {
		this.spServ.emitOpenPanel("updateAllergiePanel");
		this.idSrv.emitLineId(this.element.data_id);
	}

	deleteAllergie(): void {
		this.allergieSrv.deleteAllergie(this.element.data_id).subscribe();
	}
}
