import { Component, Input, OnInit, AbstractType } from '@angular/core';
import { Subject } from 'rxjs';
import { BorderColorInterface } from 'src/app/border-color-interface';
import { AllergiesListInterface } from '../../../allergies-list-interface';

@Component({
	selector: 'app-list-allergies',
	templateUrl: './list-allergies.component.html',
	styleUrls: ['./list-allergies.component.less']
})

export class ListAllergiesComponent implements OnInit {
	// Liste des datas
	listCategories!: AllergiesListInterface[];
	// Listener pour gérer une ouverture & fermeture de notre popup
	changingValue: Subject<boolean> = new Subject();
	// Liste de l'interface BorderColor, avec deux clés : value & color. Permet d'assigner les couleurs à la bordure
	matchingColors!: Array<BorderColorInterface>;

	constructor() {
	}

	ngOnInit(): void {
		// TODO à remove, me permet de remplir plus rapidement la liste
		if (!this.listCategories) {
			this.listCategories = [
				{
					categoryName: 'Médicamenteux',
					modifierDroits: false,
					elements: [{
						label: 'ACTIMINCYL BIO barre hyperprotéinée caramel',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'pathologie'
					},
					{
						label: 'DOLIALLERGIE LORATADINE 10 mg cp',
						date: '01/01/2022',
						code: 'D345',
						commentaire: '',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'AMOXIBACTIN 250 mg cp chien',
						date: '01/01/2022',
						code: 'D345',
						commentaire: '',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					{
						label: 'ACTIMINCYL BIO barre hyperprotéinée caramel',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'ACON test antigénique nasal',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'SPINBRUSH TRULY RADIANCE bros dent électrique',
						date: '01/01/2022',
						code: 'D345',
						commentaire: '',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					{
						label: 'DAYANG OUI TEA Gingembre Citron Bio tis',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'AAZ COVID-VIRO test antigénique',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					]
				},
				{
					categoryName: 'Alimentaire',
					modifierDroits: true,
					elements: [{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: '',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: '',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'pathologie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'pathologie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},

					]
				}
			]
		}

		// TODO Pareil
		if (!this.matchingColors) {
			this.matchingColors = [{
				value: "allergie",
				color: "orange"
			},
			{
				value: "hypersensibilité",
				color: "grey"
			},
			{
				value: "pathologie",
				color: "red"
			}];
		}
	}

	/**
	 * Retourne la couleur de bordure en fonction de la valeur passée en paramètre
	 * @param value Valeur qui détermine la couleur
	 * @returns string représentant une couleur : orange / green / red / grey
	 */
	getBorderColor(value: string | undefined): string {
		// On regarde la couleur associée à cette valeur
		let element = this.matchingColors.find(element => element.value === value);
		return element ? element.color : "grey";
	}

	/**
	 * Ferme la popup informative sur les couleurs
	 */
	closePopup() {
		this.changingValue.next(false);
	}

	/**
	 * Fonction de callback appelée lors de la confirmation de la popup
	 */
	confirmPopup() {
		alert("la confirmation marche correctement");
		this.closePopup();
	}

	/**
	 * Ouvre la popup informative sur les couleurs
	 */
	displayPopup() {
		this.changingValue.next(true);
	}
}
