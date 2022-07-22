import { Component, Input, OnInit, AbstractType } from '@angular/core';
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
	numberPkmn: any = [];
	maxPkmn: any;
	showingPkmn: any = 50;
	response: any;
  	dataLoaded: boolean = false;

	//listPokemon2: any;

	constructor(private service:GetPokeService) { 
	}
	onScrollDown(): void {
		for(let j = 1; j <= 30; j++){
			if(this.showingPkmn == this.maxPkmn){
				return;
			}
				this.showingPkmn++;
				this.numberPkmn.push(this.showingPkmn)
		}
	}
	
	ngOnInit(): void {
		this.service.getAllPokemon(this.showingPkmn)
        .subscribe((response: any) => {
		  this.listPokemon = response;
		  this.maxPkmn = response.count;
		  this.dataLoaded = true;
		  for(let i = 1; i <= this.showingPkmn; i++){
			  this.numberPkmn.push(i)
		  };
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


}
