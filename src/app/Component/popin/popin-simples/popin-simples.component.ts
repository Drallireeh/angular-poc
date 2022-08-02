import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-popin-simples',
  templateUrl: './popin-simples.component.html',
  styleUrls: ['./popin-simples.component.less']
})
export class PopinSimplesComponent implements OnInit {
  title: any = '';
  disabled: any = '';

  constructor() { }

  ctn = document.getElementsByClassName('.clavierTactileSimple');

  ngOnInit(): void {
  }

  selectNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    this.title += number; 
  }

  selectVirgule(event: any): void {
    if(this.disabled != "disabled"){
      let number = event.target.closest('button').textContent;
      this.title += number;
      this.disabled = "disabled";
    }
  }

  selectFinalNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    let popin = event.target.closest('next-popin-simples');
    this.title == '' ? this.title = '0' + number : this.title += number;
    popin.parentNode.firstChild.value = this.title;
    popin.classList.add('hidden');
  }

  erase(): void {
    if(this.title.slice(-1) == ','){
      this.disabled = '';
    }
    this.title = this.title.slice(0, -1); 
  }
}