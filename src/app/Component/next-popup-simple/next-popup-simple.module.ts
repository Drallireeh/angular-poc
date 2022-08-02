import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextOverlayComponent } from '../next-overlay/next-overlay.component';
import { NextPopupSimpleComponent } from './next-popup-simple.component';

@NgModule({
  declarations: [
    NextOverlayComponent,
    NextPopupSimpleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NextPopupSimpleComponent
  ]
})
export class NextPopupSimpleModule { }
