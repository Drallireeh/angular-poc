import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-dropdown-content',
	templateUrl: './dropdown-content.component.html',
	styleUrls: ['./dropdown-content.component.less']
})
export class DropdownContentComponent implements OnInit {
	@Input() value!: string;
	@Input() label!: string;
	@Input() active: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}
}
