import { Component, Input, OnInit, AbstractType } from '@angular/core';
import { Subject } from 'rxjs';
import { CategoriesListInterface } from '../../../categories-list-interface';

@Component({
	selector: 'app-list-of-elements',
	templateUrl: './list-of-elements.component.html',
	styleUrls: ['./list-of-elements.component.less']
})

export class ListOfElementsComponent implements OnInit {
	listCategories!: CategoriesListInterface[];
	changingValue: Subject<boolean> = new Subject();

	constructor() { 
	}
	
	ngOnInit(): void {
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
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: 'commentaire mgl',
					data_id: '015545',
					data_sejour_id: '1',
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
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: 'commentaire mgl',
					data_id: '015545',
					data_sejour_id: '1',
				},
				
				]
			}
		]
	}

	closePopup() {
		this.changingValue.next(false);
	}

	confirmPopup() {
		alert("la confirmation marche correctement");
		this.closePopup();
	}

	displayPopup() {
		console.log("display popup")
		this.changingValue.next(true);
	}
}
