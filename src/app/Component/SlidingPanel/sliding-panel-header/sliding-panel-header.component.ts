import { Component, Input, OnInit } from '@angular/core';
import { SlidingPanelService } from 'src/app/services/sliding-panel.service';

@Component({
  selector: 'app-sliding-panel-header',
  templateUrl: './sliding-panel-header.component.html',
  styleUrls: ['./sliding-panel-header.component.less']
})
export class SlidingPanelHeaderComponent implements OnInit {
  // Titre du panel
  @Input() title!: string;

  constructor(private spServ: SlidingPanelService) { }

  ngOnInit(): void {
  }

  // On clique sur la croix pour fermer le panel
  closePanelClick(): void {
    this.spServ.emitClosePanel();
  }
}
