import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { AllergieInterface } from 'src/app/allergie-interface';
import { AllergiesListInterface } from 'src/app/allergies-list-interface';
import { AllergiesService } from 'src/app/services/allergies.service';

@Component({
	selector: 'app-search-allergies',
	templateUrl: './search-allergies.component.html',
	styleUrls: ['./search-allergies.component.less'],
	host: { 'class': 'col-md-6 col-lg-6 col-sm-6' }
})
export class SearchAllergiesComponent implements OnInit {
	@Output() searchEvent = new EventEmitter<string>();

	constructor() { }

	search(term: string): void {
		this.searchEvent.next(term);
	}

	ngOnInit(): void {

	}
}
