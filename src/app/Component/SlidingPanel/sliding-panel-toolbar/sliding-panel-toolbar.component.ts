import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-sliding-panel-toolbar',
	templateUrl: './sliding-panel-toolbar.component.html',
	styleUrls: ['./sliding-panel-toolbar.component.less']
})
export class SlidingPanelToolbarComponent implements OnInit {
	@Output() showHideToolbar = new EventEmitter<boolean>();
	displayed: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	onHeaderClick(): void {
		this.displayed = !this.displayed
		this.showHideToolbar.emit(this.displayed);
	}
}
