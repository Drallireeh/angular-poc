import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelHeadingComponent } from '../panel-heading/panel-heading.component';
import { PanelBodyComponent } from '../panel-body/panel-body.component';
import { PanelBodyFiltersComponent } from '../panel-body-filters/panel-body-filters.component';

@NgModule({
  declarations: [
    PanelComponent,
    PanelHeadingComponent,
    PanelBodyComponent,
    PanelBodyFiltersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
