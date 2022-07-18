import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelHeadingComponent } from '../panel-heading/panel-heading.component';
import { PanelBodyComponent } from '../panel-body/panel-body.component';

@NgModule({
  declarations: [
    PanelComponent,
    PanelHeadingComponent,
    PanelBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
