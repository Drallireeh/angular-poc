import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfPokemonComponent } from './list-of-pokemon.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    ListOfPokemonComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    InfiniteScrollModule
  ],
  exports: [
    ListOfPokemonComponent,
    InfiniteScrollModule
  ]
})
export class ListOfPokemonModule { }
