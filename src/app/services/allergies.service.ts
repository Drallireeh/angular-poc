import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AllergieInterface } from '../allergie-interface';
import { AllergiesListInterface } from '../allergies-list-interface';
import { ALLERGIES } from '../mock-allergies';

@Injectable({
	providedIn: 'root'
})
export class AllergiesService {

	constructor() { }

	getAllergies(): Observable<AllergiesListInterface[]> {
		const allergies = of(ALLERGIES);
		return allergies;
	}

	getAllergie(id: string): Observable<AllergieInterface> {
		for (let i = 0; i < ALLERGIES.length; i++) {
			let allergieFound = ALLERGIES[i].elements.find(allergie => allergie.data_id === id);
			if (allergieFound) return of(allergieFound);
		}
		return of();
	}

	updateAllergie(allergie: AllergieInterface) {

	}

	addAllergie(categoryStr :string, allergie: AllergieInterface)  {
		ALLERGIES.find(el => el.categoryName === categoryStr)?.elements.push(allergie);
	}

	searchAllergies(searchStr: string): Observable<AllergiesListInterface[]> {
		console.log("MARCHE STP")
		if (!searchStr.trim()) {
			// if not search term, return empty hero array.
			return of([]);
		}
		let array;

		ALLERGIES.map(el => {
			array = el.elements.filter(allergie => allergie.label.indexOf(searchStr) !== -1)
		});

		if (array) {
			for (let i = 0; i < ALLERGIES.length; i++) {
				ALLERGIES[i].elements = array[i];
			}
		}

		return of(ALLERGIES);
	}

	deleteAllergie(allergieId: string): Observable<AllergiesListInterface[]> {
		for (let i = 0; i < ALLERGIES.length; i++) {
			let allergieIdx = ALLERGIES[i].elements.findIndex(allergie => allergie.data_id === allergieId);
			if (allergieIdx !== -1) {
				ALLERGIES[i].elements.splice(allergieIdx, 1);
				break;
			}
		}

		return of(ALLERGIES);
	}
}
