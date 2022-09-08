import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, take, tap } from 'rxjs';
import { AllergieInterface } from 'src/app/allergie-interface';
import { BtnAsRadioInterface } from 'src/app/btn-as-radio-interface';
import { DropdownOption } from 'src/app/dropdown-option';
import { AllergiesService } from 'src/app/services/allergies.service';
import { LineIdService } from 'src/app/services/line-id.service';

@Component({
	selector: 'app-update-allergie',
	templateUrl: './update-allergie.component.html',
	styleUrls: ['./update-allergie.component.less'],
	host: { 'class': 'padding-around' }
})
export class UpdateAllergieComponent implements OnInit {
	@Input() updateEvent = new Observable<void>();
	@Input() addAllergieEvent = new Observable<void>();
	@Input() addingMode = new Observable<number>();
	@Input() updateMode = false;

	@Input() dropdownAddMed: Array<DropdownOption> = [
		{ value: '0', label: 'Aucun top inclus' },
		{ value: '1', label: 'Top Parcours' },
		{ value: '2', label: 'Top Praticiens' },
		{ value: '3', label: 'Top Spécialité' }];

	// Mode d'ajout des allergies : Medicaments 0, Alimentaire 1, Environnementale 2
	mode = 0;

	listBtnRadio: BtnAsRadioInterface[] = [{
		'label': 'Aucune',
		'selected': true
	},
	{
		'label': 'Allergie',
		'selected': false
	},
	{
		'label': 'Hypersensibilité',
		'selected': false
	}];
	id = '';
	label = "";
	labelType = "";
	dateValue = new Date(2022, 10, 10);
	commentary = "";
	date?: string;
	allergieType?: string;
	code = "";
	updated_by = '';

	// Init allergie
	allergie: AllergieInterface = {
		label: '',
		date: '',
		code: '',
		commentaire: '',
		data_id: '',
		data_sejour_id: '',
		type: '',
		allergieTypeString: ''
	};

	destroy$ = new Subject<void>();

	constructor(private allergieSrv: AllergiesService, private idSrv: LineIdService) { }

	ngOnInit(): void {
		this.updateEvent.pipe(takeUntil(this.destroy$)).subscribe(() => {
			this.updateAllergie();
		});
		this.addAllergieEvent.pipe(takeUntil(this.destroy$)).subscribe(() => {
			this.addAllergie();
		});
		this.addingMode.pipe(takeUntil(this.destroy$)).subscribe((mode) => {
			this.mode = mode;
			switch (mode) {
				case 0:
					this.labelType = "Médicament";
					break;
				case 1:
					this.labelType = "Alimentaire";
					this.label = "Allergie alimentaire";
					break;
				case 2:
					this.labelType = "Environnementale";
					this.label = "Allergie environnementale"
					break;
				default:
					break;
			}
		})

		// Ecoute sur la récupération de l'id de la ligne, pour ensuite récupérer l'allergie
		if (this.updateMode) {
			this.idSrv.lineIdListener().pipe(takeUntil(this.destroy$)).subscribe((elementId) => {
				if (!elementId) {
					this.label = "label vide";
					this.labelType = ""
					this.code = '';
					this.date = '';
					this.commentary = "";
					this.allergieType = "";
					this.updated_by = '';
					this.id = '';
				}
				else {
					this.allergieSrv.getAllergie(elementId).pipe().subscribe(allergie => {
						// On récupère l'objet allergie pour changer uniquement les champs qui peuvent être modifiés lors de l'update
						this.allergie = allergie;

						this.label = allergie.label
						this.labelType = allergie.allergieTypeString;
						this.date = allergie.date;
						this.code = allergie.code;
						this.commentary = JSON.parse(JSON.stringify(allergie.commentaire));
						this.allergieType = allergie?.type;
					});
					this.setAllergieType();
				}
			});
		}
	}

	// on set la valeur du type de l'allergie
	setAllergieType(): void {
		// Si on a aucune allergie sélectionnée (cas d'ajout d'allergie) alors on sélectionne par défaut le premier type
		if (!this.allergieType) {
			this.listBtnRadio.forEach(element => element.selected = false);
			this.listBtnRadio[0].selected = true;
		}
		// Sinon on compare le label de type présent dans l'allergie pour choisir le bon type
		else {
			for (let i = 0; i < this.listBtnRadio.length; i++) {
				if (this.allergieType === this.listBtnRadio[i].label) this.listBtnRadio[i].selected = true;
				else this.listBtnRadio[i].selected = false;
			}
		}
	}

	// changeAllergieType(label: string) {
	// 	this.allergieType = label;
	// }

	// Suppression du code cim10 de l'allergie
	removeCim10(): void {
		this.code = '';
	}

	// Event trigger lor du changement de la date
	changeDate(e: Date) {
		console.log(e)
	}

	/**
	   * Création d'une date en partant d'une string au format fr (Jour/Mois/Année hh:mm)
	   * @param {string} dateString Chaine de caractère représentant la date
	   */
	CreateDateFromFrenchString(dateString: string = ""): Date {
		if (!dateString) return new Date();
		else {
			let splittedValue = dateString.split(" ");
			let splittedDate = splittedValue[0].split("/");

			let date;
			if (splittedValue[1]) date = new Date(`${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]} ${splittedValue[1]}`);
			else date = new Date(`${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`);

			return date;
		}
	}

	// Suppression des écouteurs sur l'event pour éviter le leak memory
	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	// On attribue toutes les valeurs succeptibles d'avoir changées dans le panel
	setAllergieInformations(): void {
		this.allergie.code = this.code;
		this.allergie.commentaire = this.commentary;
		this.allergie.date = this.date;
		this.allergie.updated_by = "Dr Herillard Kenny";
		this.allergie.type = this.allergieType;
	}

	setAllergieCategory(): string {
		switch (this.mode) {
			case 0:
				return "Médicamenteux";
			case 1:
				return "Alimentaire"
			case 2:
				return "Environnementale";
			default: return ""
		}
	}

	updateAllergie(): void {
		this.setAllergieInformations();

		// Appel au service pour faire l'update de notre data
		this.allergieSrv.updateAllergie(this.allergie);
	}

	addAllergie(): void {
		this.setAllergieInformations();

		let allergieCategory = this.setAllergieCategory();

		//TODO Le nom de la catégorie est à modifié en focntion du mode d'ajout utilisé
		this.allergieSrv.addAllergie(allergieCategory, this.allergie);
	}
}
