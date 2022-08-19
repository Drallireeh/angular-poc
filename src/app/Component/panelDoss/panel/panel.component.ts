import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less']
})
export class PanelComponent implements OnInit {
  @Input() idString!: string; 
  @Input() panelTitle!: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
