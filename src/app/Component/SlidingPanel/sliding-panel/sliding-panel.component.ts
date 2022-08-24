import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SlidingPanelService } from 'src/app/services/sliding-panel.service';

@Component({
	selector: 'app-sliding-panel',
	templateUrl: './sliding-panel.component.html',
	styleUrls: ['./sliding-panel.component.less']
})
export class SlidingPanelComponent implements OnInit {
	@Input() title: string = "Titre du panel";
	@Input() width: number = 512;
	isOpen: boolean = false;
	openClassName: string = "open";
	toolbar: boolean = false;

// Sujet permettant de clear les event à la destruction du composant (leak memory)
destroy$ = new Subject<void>();

	constructor(private spServ: SlidingPanelService) { }

	ngOnInit(): void {
		this.spServ.OpenPanelListener().pipe(takeUntil(this.destroy$)).subscribe((value) => {
			if (value) this.openPanel();
			else this.closePanel();
		});
	}

	openPanel(): void {
		this.openClassName = "open";
		this.isOpen = true;
	}

	closePanel(): void {
		this.openClassName = "";
		setTimeout(() => {
			this.isOpen = false;
		}, 750);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
