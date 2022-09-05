import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BorderColorInterface } from 'src/app/border-color-interface';
import { AllergiesService } from 'src/app/services/allergies.service';
import { BorderPopupService } from 'src/app/services/border-popup.service';
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

	// Sujet permettant de clear les event à la destruction du composant (leak memory)
	destroy$ = new Subject<void>();

	constructor(private borderSrv: BorderPopupService, private allergieSrv: AllergiesService) {
	}

	ngOnInit(): void {
		this.getAllergies();

		// TODO Pareil
		if (!this.matchingColors) {
			this.matchingColors = [
				{
					value: "",
					color: "red",
					text: "un type non renseigné"
				},
				{
					value: "Allergie",
					color: "orange",
					text: "une allergie"
				},
				{
					value: "Hypersensibilité",
					color: "grey",
					text: "une hypersensibilité"
				}];
		}

		this.borderSrv.BorderEventListener().pipe(takeUntil(this.destroy$)).subscribe(() => {
			this.displayPopup();
		});
	}

	getAllergies(): void {
		this.allergieSrv.getAllergies().subscribe(allergies => this.listCategories = allergies);
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
	confirmPopup(promptValue?: string) {
		if (promptValue) alert(promptValue);
		alert("la confirmation marche correctement");
		this.closePopup();
	}

	/**
	 * Ouvre la popup informative sur les couleurs
	 */
	displayPopup() {
		this.changingValue.next(true);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
