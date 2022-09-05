import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AllergieInterface } from 'src/app/allergie-interface';
import { BtnAsRadioInterface } from 'src/app/btn-as-radio-interface';
import { AllergiesService } from 'src/app/services/allergies.service';
import { LineIdService } from 'src/app/services/line-id.service';

@Component({
	selector: 'app-update-allergie',
	templateUrl: './update-allergie.component.html',
	styleUrls: ['./update-allergie.component.less']
})
export class UpdateAllergieComponent implements OnInit {
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
	dateValue: Date = new Date(2022, 10, 10);
	allergie: AllergieInterface = {
		label: '',
		date: '',
		code: '',
		commentaire: '',
		data_id: '',
		data_sejour_id: '',
		type: '',
	};
	destroy$ = new Subject<void>();

	constructor(private allergieSrv: AllergiesService, private idSrv: LineIdService) { }

	ngOnInit(): void {
		this.idSrv.lineIdListener().pipe(takeUntil(this.destroy$)).subscribe((elementId) => {
			if (!elementId) {
				this.allergie = {
					label: '',
					date: '',
					code: '',
					commentaire: '',
					data_id: '',
					data_sejour_id: '',
					type: '',
				}
			}
			else {
				this.allergieSrv.getAllergie(elementId).subscribe(allergie => this.allergie = allergie);
				this.getAllergieType();
			}
		});
	}

	getAllergieType(): void {
		if (!this.allergie?.type) {
			this.listBtnRadio.forEach(element => element.selected = false);
			this.listBtnRadio[0].selected = true;
		}
		else {
			for (let i = 0; i < this.listBtnRadio.length; i++) {
				if (this.allergie?.type === this.listBtnRadio[i].label) this.listBtnRadio[i].selected = true;
				else this.listBtnRadio[i].selected = false;
			}
		}
	}

	changeAllergieType(label: string) {
		this.allergie.type = label;
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
}
