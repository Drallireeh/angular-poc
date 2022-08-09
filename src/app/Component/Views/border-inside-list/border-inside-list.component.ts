import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-inside-list',
  templateUrl: './border-inside-list.component.html',
  styleUrls: ['./border-inside-list.component.less']
})
export class BorderInsideListComponent implements OnInit {
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
