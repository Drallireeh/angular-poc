import { Component, Input, OnInit } from '@angular/core';
import { CategoriesListInterface } from '../categories-list-interface';
import { GetPokeService } from '../services/get-poke.service';

@Component({
	selector: 'app-list-of-elements',
	templateUrl: './list-of-elements.component.html',
	styleUrls: ['./list-of-elements.component.less']
})
export class ListOfElementsComponent implements OnInit {
	listCategories!: CategoriesListInterface[];
	listPokemon: any;
	array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";

	//listPokemon2: any;

	constructor(private service:GetPokeService) { 
	}

	ngOnInit(): void {
		this.service.getAllPokemon()
        .subscribe(response => {
		  this.listPokemon = response;
		});



		// for(let i = 1; i <= 9; i++){
		// 	this.service.getOnePokemon(i)
		// 	.subscribe(response2 => {
		// 		this.listPokemon2 += JSON.stringify(response2);
		// 	})
		// }


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
	onScrollDown(): void {
		console.log('je scroll')
	}

	clicked() : void {
		console.log('clicked')
	}

}
