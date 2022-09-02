import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnAsRadioInterface } from 'src/app/btn-as-radio-interface';

@Component({
	selector: 'app-btns-as-radio',
	templateUrl: './btns-as-radio.component.html',
	styleUrls: ['./btns-as-radio.component.less']
})
export class BtnsAsRadioComponent implements OnInit {
	@Input() btns: BtnAsRadioInterface[] = [];
	labelSelected?: string;
	btnValueSelected?: string;
	@Output() selectEvent = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterInit(): void {
		let btn = this.btns.find(element => element.selected === true);
		if (!btn && this.btns) btn = this.btns[0];

		this.setSelectedValues(btn?.label, btn?.value);
	}

	selectBtn(event: any): void {
		this.btns.map((btn) => {
			btn.selected = false;
		});

		let btnClicked = this.btns.find(btn => event?.target?.innerText === btn.label);
		if (btnClicked) {
			btnClicked.selected = true;
			this.setSelectedValues(btnClicked.label, btnClicked.value);
		}
	}

	setSelectedValues(label: string | undefined, value: string | undefined): void {
		this.labelSelected = label;
		this.btnValueSelected = value;
		this.selectEvent.emit(label);
	}
}
