import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'popin-header',
  templateUrl: './popin-header.component.html',
  styleUrls: ['./popin-header.component.less']
})
export class PopinHeaderComponent implements OnInit {

  constructor() { }

  // Variable de titre récupéré par le composant parent
  @Input() title!: string; 

  // Evenement renvoyé vers le composant parent
  @Output() closePopin = new EventEmitter<void>;

  ngOnInit(): void {
  }

  // Fonction qui active la variable qui renvoie un évènement
  closePopinHeader(): void {
    this.closePopin.emit();
  }
}
