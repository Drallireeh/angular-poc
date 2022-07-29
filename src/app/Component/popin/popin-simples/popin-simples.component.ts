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
    let popin = event.target.closest('next-popin-simples');
    popin.parentNode.firstChild.value = number;
    console.log(popin.parentNode.firstChild)
    popin.classList.add('hidden');
  }
}