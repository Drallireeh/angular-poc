import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfElementsComponent } from './list-of-elements.component';
import { ElementFromListComponent } from '../element-from-list/element-from-list.component';


@NgModule({
  declarations: [
    ListOfElementsComponent,
    ElementFromListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListOfElementsComponent
  ]
})
export class ListOfElementsModule { }
