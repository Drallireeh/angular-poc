import { Component, Input, OnInit, AbstractType } from '@angular/core';
import { CategoriesListInterface } from '../categories-list-interface';
import { GetPokeService } from '../services/get-poke.service';

@Component({
  selector: 'app-list-of-pokemon',
  templateUrl: './list-of-pokemon.component.html',
  styleUrls: ['./list-of-pokemon.component.less']
})

export class ListOfPokemonComponent implements OnInit {
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
	}


}
