import { Component, Input, OnInit, AbstractType } from '@angular/core';
import { Subject } from 'rxjs';
import { BorderColorInterface } from 'src/app/border-color-interface';
import { CategoriesListInterface } from '../../../categories-list-interface';

@Component({
	selector: 'app-list-of-elements',
	templateUrl: './list-of-elements.component.html',
	styleUrls: ['./list-of-elements.component.less']
})

export class ListOfElementsComponent implements OnInit {
	// Liste des datas
	listCategories!: CategoriesListInterface[];
	// Listener pour gérer une ouverture & fermeture de notre popup
	changingValue: Subject<boolean> = new Subject();
	// Liste de l'interface BorderColor, avec deux clés : value & color. Permet d'assigner les couleurs à la bordure
	matchingColors!: Array<BorderColorInterface>;
	// Informations de titre sur les boutons d'actions situés tout à droite. le bouton other est optionnel
	@Input() titleBtnUpdate: string = "";
	@Input() titleBtnDelete: string = "";
	@Input() titleBtnOther!: string;
	// Gestion de l'icône qu'on souhaite donner à un troisième bouton d'actions
	@Input() iconeOtherBtn!: string;

	constructor() {
	}

	ngOnInit(): void {
		// TODO à remove, me permet de remplir plus rapidement la liste
		if (!this.listCategories) {
			this.listCategories = [
				{
					categoryName: 'test de nom',
					elements: [{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'pathologie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},

					]
				},
				{
					categoryName: 'test de nom 2',
					elements: [{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'hypersensibilité'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'allergie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'pathologie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
						data_id: '015545',
						data_sejour_id: '1',
						type: 'pathologie'
					},
					{
						label: 'test de label',
						date: '01/01/2022',
						code: 'D345',
						commentaire: 'commentaire mgl',
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
