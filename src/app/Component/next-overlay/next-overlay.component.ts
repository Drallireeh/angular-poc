import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-next-overlay',
	templateUrl: './next-overlay.component.html',
	styleUrls: ['./next-overlay.component.less']
})
export class NextOverlayComponent implements OnInit {
	@Output() closePopup = new EventEmitter<void>;

	@HostListener('click', ['$event'])
	onClick() {
		this.closePopup.emit();
	}

	constructor() { }

	ngOnInit(): void {
	}

}
