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
  @Input() forceFocus!: string; 
  @Input() widthBtn: string = '45px'; 

  ngOnInit(): void {
  }

  focus(event: any): void {
    let button = event.target.closest('button');
    button.classList.add('focus');
  }

  unFocus(event: any): void {
    let button = event.target.closest('button');
    button.classList.remove('focus');
  }
}
