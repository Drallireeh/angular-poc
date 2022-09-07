import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextOverlayComponent } from '../next-overlay/next-overlay.component';
import { NextPopupComponent } from './next-popup.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NextOverlayComponent,
    NextPopupComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule
  ],
  exports: [
    NextPopupComponent
  ]
})
export class NextPopupModule { }
