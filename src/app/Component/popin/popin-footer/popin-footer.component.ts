import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popin-footer',
  templateUrl: './popin-footer.component.html',
  styleUrls: ['./popin-footer.component.less']
})
export class PopinFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closePopin(event: any): void {
    let footer = event.target.closest('popin-footer');
    let main = footer.previousElementSibling;
    let value = main.querySelector('h1').textContent;
    let popin = event.target.closest('next-popin-simples');
    popin.parentNode.firstChild.value = value;
    popin.classList.add('hidden');
  }

}
