import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'popin-footer',
  templateUrl: './popin-footer.component.html',
  styleUrls: ['./popin-footer.component.less']
})
export class PopinFooterComponent implements OnInit {

  constructor() { }

  // Evenement renvoyé vers le composant parent
  @Output() closePopin = new EventEmitter<void>;

  ngOnInit(): void {
  }

  // Fonction qui active la variable qui renvoie un évènement
  closePopinFooter(event: any): void {
    // Récupération des elemnts pour atteindre la valeur inscrite et l'input référent
    let footer = event.target.closest('popin-footer');
    let main = footer.previousElementSibling;
    let value = main.querySelector('h1').textContent;
    let popin = event.target.closest('next-popin-simples');

    // Change la valeur de l'input référent
    popin.parentNode.firstChild.value = value;

    // Active la variable qui renvoie un évènement
    this.closePopin.emit();
  }

}
