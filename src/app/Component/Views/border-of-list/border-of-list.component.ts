import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-border-of-list',
	templateUrl: './border-of-list.component.html',
	styleUrls: ['./border-of-list.component.less']
})
export class BorderOfListComponent implements OnInit {
	@Input() colorValue!: string;
	@HostBinding('class') classValue = this.colorValue;

	constructor() { }

	ngOnInit(): void {
    this.classValue = this.colorValue;
		console.log(this.colorValue)
	}
}
