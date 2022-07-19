import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-panel-body-filters',
	template: `<div class="panel-body-filters">
    	<ng-content></ng-content>
  	</div>`,
	styleUrls: ['./panel-body-filters.component.less']
})
export class PanelBodyFiltersComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
