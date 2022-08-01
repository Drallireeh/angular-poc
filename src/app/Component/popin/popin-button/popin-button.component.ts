import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'popin-button',
  templateUrl: './popin-button.component.html',
  styleUrls: ['./popin-button.component.less']
})
export class PopinButtonComponent implements OnInit {

  constructor() { }

  @Input() value!: string; 
  @Input() type!: string; 

  ngOnInit(): void {
  }

  focus(event: any): void {
    console.log('oui')
    let button = event.target.closest('button');
    button.classList.add('focus');
  }

  unFocus(event: any): void {
    console.log('non')
    let button = event.target.closest('button');
    button.classList.remove('focus');
  }
}
