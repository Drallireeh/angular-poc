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
	listCategories!: CategoriesListInterface[];
	changingValue: Subject<boolean> = new Subject();
	matchingColors!: Array<BorderColorInterface>;

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
		}]
	}

	getBorderColor(value: string | undefined): string {
		let element = this.matchingColors.find(element => element.value === value);
		return element ? element.color : "grey";
	}

	closePopup() {
		this.changingValue.next(false);
	}

	confirmPopup() {
		alert("la confirmation marche correctement");
		this.closePopup();
	}

	displayPopup() {
		this.changingValue.next(true);
	}
}
