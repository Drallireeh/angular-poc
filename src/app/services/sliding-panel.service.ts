import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SlidingPanelService {
	private openPanelEvent = new Subject<string>();

	emitOpenPanel(idPanel: string) {
		this.openPanelEvent.next(idPanel);
	}

	emitClosePanel() {
		this.openPanelEvent.next("");
	}

	OpenPanelListener() {
		return this.openPanelEvent.asObservable();
	}

	constructor() { }
}
