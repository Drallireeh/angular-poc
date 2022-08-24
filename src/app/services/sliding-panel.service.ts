import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SlidingPanelService {
	private openPanelEvent = new Subject<boolean>();

	emitOpenPanel() {
		this.openPanelEvent.next(true);
	}

	emitClosePanel() {
		this.openPanelEvent.next(false);
	}

	OpenPanelListener() {
		return this.openPanelEvent.asObservable();
	}

	constructor() { }
}
