import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfElementsComponent } from './list-of-elements.component';
import { ElementFromListComponent } from '../element-from-list/element-from-list.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ListOfElementsComponent,
    ElementFromListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ListOfElementsComponent
  ]
})
export class ListOfElementsModule { }
