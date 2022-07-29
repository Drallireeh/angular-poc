import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-popin-simples',
  templateUrl: './popin-simples.component.html',
  styleUrls: ['./popin-simples.component.less']
})
export class PopinSimplesComponent implements OnInit {
  title: string = '';

  constructor() { }

  ctn = document.getElementsByClassName('.clavierTactileSimple');

  ngOnInit(): void {
  }

  selectNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    this.title += number; 
  }

  selectFinalNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    let popin = event.target.closest('next-popin-simples');
    this.title == '' ? this.title = '0' + number : this.title += number;
    popin.parentNode.firstChild.value = this.title;
    popin.classList.add('hidden');
  }
}