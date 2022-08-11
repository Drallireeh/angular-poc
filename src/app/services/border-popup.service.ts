import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BorderPopupService {
	private clicOnBorderEvent = new Subject<void>();

	emitBorderClic() {
		this.clicOnBorderEvent.next();
	}

	BorderEventListener() {
		return this.clicOnBorderEvent.asObservable();
	}

	ngOnDestroy() {
		
	}

	constructor() { }
}
