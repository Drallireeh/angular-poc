import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-panel-content',
  templateUrl: './sliding-panel-content.component.html',
  styleUrls: ['./sliding-panel-content.component.less'],
  host: {'class': 'flex flex-grow-1'}
})
export class SlidingPanelContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
