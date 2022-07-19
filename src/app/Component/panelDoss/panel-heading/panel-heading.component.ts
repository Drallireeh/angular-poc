import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-heading',
  templateUrl: './panel-heading.component.html',
  styleUrls: ['./panel-heading.component.less']
})
export class PanelHeadingComponent implements OnInit {
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
