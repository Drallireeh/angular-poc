import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-dropdown-content',
	templateUrl: './dropdown-content.component.html',
	styleUrls: ['./dropdown-content.component.less']
})
export class DropdownContentComponent implements OnInit {
	@Input() value!: string;
	@Input() label!: string;
	@Input() active: boolean = false;
	@Output() selectEvent = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
	}

	selectValue() {
		console.log("Event de clic sur le li")
		this.selectEvent.emit(this.label)
	}
}
