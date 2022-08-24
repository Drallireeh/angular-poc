import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidingPanelHeaderComponent } from '../sliding-panel-header/sliding-panel-header.component';
import { SlidingPanelContentComponent } from '../sliding-panel-content/sliding-panel-content.component';
import { SlidingPanelFooterComponent } from '../sliding-panel-footer/sliding-panel-footer.component';
import { SlidingPanelComponent } from './sliding-panel.component';
import { BtnsAsRadioModule } from '../../btns-as-radio/btns-as-radio.module';

@NgModule({
  declarations: [
    SlidingPanelHeaderComponent,
    SlidingPanelContentComponent,
    SlidingPanelFooterComponent,
    SlidingPanelComponent
  ],
  imports: [
    CommonModule,
    BtnsAsRadioModule
  ],
  exports: [
    SlidingPanelComponent
  ]
})
export class SlidingPanelModule { }
