import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-popin-base',
  templateUrl: './popin-base.component.html',
  styleUrls: ['./popin-base.component.less']
})
export class PopinBaseComponent implements OnInit {

  constructor() { }

  // Variable de titre qu'on renvoie vers le popin-header
  @Input() title!: string; 

  // Evenement renvoyé vers le composant parent
  @Output() closePopin = new EventEmitter<void>;

  @Output() closePopinWithValue = new EventEmitter<void>;

  ngOnInit(): void {
  }

  // Fonction qui active la variable qui renvoie un évènement
  closePopinBase(): void {
    this.closePopin.emit();
  }

  closePopinBaseWithValue(): void {
    this.closePopinWithValue.emit();
  }
}