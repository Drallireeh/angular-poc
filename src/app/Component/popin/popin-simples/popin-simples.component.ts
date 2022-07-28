import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-popin-simples',
  templateUrl: './popin-simples.component.html',
  styleUrls: ['./popin-simples.component.less']
})
export class PopinSimplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    let appPopin = event.target.closest('app-popin-simple');
    appPopin.parentNode.firstChild.value = number;
    appPopin.classList.add('hidden');
  }
}
