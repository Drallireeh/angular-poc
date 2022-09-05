import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LineIdService {
	private lineIdEvent = new Subject<string>();

	emitLineId(idPanel: string) {
		this.lineIdEvent.next(idPanel);
	}

	lineIdListener() {
		return this.lineIdEvent.asObservable();
	}

	constructor() { }
}
