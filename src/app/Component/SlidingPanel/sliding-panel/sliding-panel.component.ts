import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SlidingPanelService } from 'src/app/services/sliding-panel.service';

@Component({
	selector: 'app-sliding-panel',
	templateUrl: './sliding-panel.component.html',
	styleUrls: ['./sliding-panel.component.less']
})
export class SlidingPanelComponent implements OnInit {
	// On a ici les tailles autorisées pour définir la taille du panel
	listeWidthAuthorized = ["40%", "50%", "62.5%", "100%", "400px", "600px", "800px"];
	// Ajout d'une taille par défaut
	defaultWidth = '40%';
	// Titre du panel a renseigner lors de sa création
	@Input() title: string = "Titre du panel";
	// Taille du panel a renseigner lors de sa création
	@Input() width: string = this.defaultWidth;
	// Permet d'indiquer si le panel est ouvert ou fermé
	isOpen: boolean = false;
	// Gére l'animation du panel, si la classe n'est pas remise à 0 quand il faut l'animation ne se joue pas
	openClassName: string = "open";
	// Affiche ou cache la toolbar
	toolbar: boolean = false;

	// Callback on open
	@Output() onOpen = new EventEmitter<void>()
	// Callback on close
	@Output() onClose = new EventEmitter<void>()

	// Sujet permettant de clear les event à la destruction du composant (leak memory)
	destroy$ = new Subject<void>();

	constructor(private spServ: SlidingPanelService) { }

	ngOnInit(): void {
		// Si la width ne correspond pas aux tailles 
		if (!this.listeWidthAuthorized.find(str => this.width === str)) this.width = this.defaultWidth;

		// On connecte un listener sur l'event d'ouverture/fermeture du panel
		this.spServ.OpenPanelListener().pipe(takeUntil(this.destroy$)).subscribe((value) => {
			if (value) this.openPanel();
			else this.closePanel();
		});
	}

	// Ouverture du panel
	openPanel(): void {
		this.openClassName = "open";
		this.isOpen = true;
		this.onOpen.emit();
	}

	// Fermeture du panel
	closePanel(): void {
		this.openClassName = "";
		// On laisse le temps à l'animation de fermeture de s'effectuer (l'animation css dure 1s, on prend donc la moitié pour attendre le timeout)
		setTimeout(() => {
			this.isOpen = false;
		}, 500);
		this.onClose.emit();
	}

	// Suppression des écouteurs sur l'event pour éviter le leak memory
	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
