import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-panel-header',
  templateUrl: './sliding-panel-header.component.html',
  styleUrls: ['./sliding-panel-header.component.less']
})
export class SlidingPanelHeaderComponent implements OnInit {
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
