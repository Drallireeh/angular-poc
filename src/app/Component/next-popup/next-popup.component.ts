import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-next-popup',
  templateUrl: './next-popup.component.html',
  styleUrls: ['./next-popup.component.less']
})
export class NextPopupComponent implements OnInit {
  // AFfiche / cache la window
  @Input() isOpen: boolean = false;
  // Indique si la popup est une popup de confirmation ou seulement d'alerte. Affiche le bouton d'annulation si c'est le cas
  @Input() confirmPopup: boolean = false;
  // Titre
  @Input() title: string = "Titre de la popup";
  // Texte du bouton de confirmation
  @Input() confirmationText: string = "Ok";
  // Texte du bouton d'annulation
  @Input() annulationText: string = "Annuler";
  // Titre
  @Input() icone: string = "next-icon-question";
  // Taille de popup
  @Input() width: number = 450;
  // Emitter de l'event de confirmation
  @Output() confirmCallbackEvent = new EventEmitter<string | undefined>();
  // Sujet qui gère l'affichage de la popup
  @Input() subjectOpen$!: Subject<boolean>;
  // Détermine si on utilise une popup avec input (prompt)
  @Input() prompt: boolean = false;
  // Valeur du champ d'input
  @Input() promptValue: string = "";

  // Sujet permettant de clear les event à la destruction du composant (leak memory)
  destroy$ = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    // Tant que l'event destroy existe alors on écoute le sujet. Quand destroy sera finis, on pense à clear l'event pour les leak memory (best practice)
    this.subjectOpen$.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.isOpen = v;
    });
  }

  // Fonction de callback qui emit l'évent de clic sur le bouton de confirmation
  confirmCallback(): void {
    // Si on est en mode prompt on veut pouvoir récupérer la valeur de l'input
    if (this.prompt) this.confirmCallbackEvent.emit(this.promptValue);
    else this.confirmCallbackEvent.emit();
    this.closeWindow();
  }

  // Ferme la fenêtre
  closeWindow(): void {
    this.subjectOpen$.next(false);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
