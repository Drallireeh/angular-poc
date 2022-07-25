import { Component,Input, OnInit } from '@angular/core';
import { GetPokeService } from '../../../services/get-poke.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.less']
})
export class PokemonDetailComponent implements OnInit {
  @Input() index!: number;

  pokemon: any;
  dataLoaded: boolean = false;

  constructor(private service:GetPokeService) { }

  ngOnInit(): void {
    this.service.getOnePokemon(this.index + 1)
		 	.subscribe((pkmn: any) => {
         this.pokemon = pkmn;
         this.dataLoaded = true;
       })
    }

}
