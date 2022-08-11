import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextOverlayComponent } from '../next-overlay/next-overlay.component';
import { NextPopupComponent } from './next-popup.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    NextOverlayComponent,
    NextPopupComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    NextPopupComponent
  ]
})
export class NextPopupModule { }
