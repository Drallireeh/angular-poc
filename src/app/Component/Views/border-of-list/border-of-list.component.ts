import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-border-of-list',
	templateUrl: './border-of-list.component.html',
	styleUrls: ['./border-of-list.component.less']
})
export class BorderOfListComponent implements OnInit {
	@Input() colorValue!: string;
	@HostBinding('class') class = this.colorValue;

	constructor() { }

	ngOnInit(): void {
		console.log(this.colorValue)
	}
}
