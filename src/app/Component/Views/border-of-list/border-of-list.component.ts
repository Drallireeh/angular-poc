import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-of-list',
  templateUrl: './border-of-list.component.html',
  styleUrls: ['./border-of-list.component.less']
})
export class BorderOfListComponent implements OnInit {
  // Valeur de la couleur de bordure
  @Input() colorValue!: string;
  // Connexion de la valeur à une classe dynamique
  @HostBinding('class') classValue = this.colorValue;

  constructor() { }

  ngOnInit(): void {
    // Assignation de la classe à la valeur de la couleur donnée
    this.classValue = this.colorValue;
  }
}
