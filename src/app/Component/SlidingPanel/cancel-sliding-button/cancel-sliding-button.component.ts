import { Component, Input, OnInit } from '@angular/core';
import { SlidingPanelService } from 'src/app/services/sliding-panel.service';

@Component({
	selector: 'app-cancel-sliding-button',
	templateUrl: './cancel-sliding-button.component.html',
	styleUrls: ['./cancel-sliding-button.component.less']
})
export class CancelSlidingButtonComponent implements OnInit {
	@Input() slotName: string = "left";
	@Input() buttonLabel: string = "Annuler";

	constructor(private spServ: SlidingPanelService) { }

	ngOnInit(): void {
	}

	onClick(): void {
		this.spServ.emitClosePanel();
	}
}
