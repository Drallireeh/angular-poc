import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfElementsComponent } from './list-of-elements.component';
import { ElementFromListComponent } from '../element-from-list/element-from-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    ListOfElementsComponent,
    ElementFromListComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    InfiniteScrollModule
  ],
  exports: [
    ListOfElementsComponent,
    InfiniteScrollModule
  ]
})
export class ListOfElementsModule { }