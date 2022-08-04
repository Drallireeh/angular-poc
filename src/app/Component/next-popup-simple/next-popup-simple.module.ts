import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextOverlayComponent } from '../next-overlay/next-overlay.component';
import { NextPopupSimpleComponent } from './next-popup-simple.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    NextOverlayComponent,
    NextPopupSimpleComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    NextPopupSimpleComponent
  ]
})
export class NextPopupSimpleModule { }
