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
	//listPokemon2: any;

	constructor(private service:GetPokeService) { }

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
				categoryName: 'Médicamenteux',
				elements: [{
					label: 'ACTIMINCYL BIO barre hyperprotéinée caramel',
					date: '',
					code: '',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'DOLIALLERGIE LORATADINE 10 mg cp',
					date: '02/01/2022',
					code: '',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'AMOXIBACTIN 250 mg cp chien',
					date: '01/03/2022',
					code: 'D345',
					commentaire: 'Je suis un commentaire',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'ACTIMINCYL BIO barre hyperprotéinée caramel',
					date: '18/01/2022',
					code: '',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'ACON test antigénique nasal',
					date: '',
					code: '',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'SPINBRUSH TRULY RADIANCE bros dent électrique',
					date: '15/07/2022',
					code: 'D475',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'ALERE HOME TEST test H-Pylori',
					date: '20/08/2022',
					code: 'C032',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'DAYANG OUI TEA Gingembre Citron Bio tis',
					date: '11/12/2022',
					code: 'B123',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},

				]
			},
			{
				categoryName: 'Alimentaire',
				elements: [{
					label: 'AAZ COVID-VIRO test antigénique',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: "Je possède une allergie hypersensible de type alimentaire, notamment aux crevettes, aux huîtres et à tout type de crustacés. Je suis également allergique aux légumineuses et aux légumes secs.  mais le but n'est pas non plus d'arrêter de manger",
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'Hypersensibilité aux curares',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				{
					label: 'test de label',
					date: '01/01/2022',
					code: 'D345',
					commentaire: '',
					data_id: '015545',
					data_sejour_id: '1',
				},
				
				]
			}
		]
	}

}
