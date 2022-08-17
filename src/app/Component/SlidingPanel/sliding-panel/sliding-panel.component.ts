import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-sliding-panel',
	templateUrl: './sliding-panel.component.html',
	styleUrls: ['./sliding-panel.component.less']
})
export class SlidingPanelComponent implements OnInit {
	@Input() title: string = "Titre du panel";
	@Input() width: number = 512;
	isOpen: boolean = true;
	openClassName: string = "open";
	toolbar: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	closePanel(): void {
		this.openClassName = "";
		setTimeout(() => {
			this.isOpen = false;
		}, 750);
	}
}
