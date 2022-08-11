import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllergiesComponent } from './list-allergies.component';
import { AllergieLineComponent } from '../allergie-line/allergie-line.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NextPopupModule } from '../../next-popup/next-popup.module';
import { BorderInsideListComponent } from '../border-inside-list/border-inside-list.component';
import { ActionsInsideListComponent } from '../actions-inside-list/actions-inside-list.component';

@NgModule({
  declarations: [
    ListAllergiesComponent,
    AllergieLineComponent,
    BorderInsideListComponent,
    ActionsInsideListComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    InfiniteScrollModule,
    NextPopupModule
  ],
  exports: [
    ListAllergiesComponent,
    InfiniteScrollModule,
  ]
})
export class ListAllergiesModule { }
