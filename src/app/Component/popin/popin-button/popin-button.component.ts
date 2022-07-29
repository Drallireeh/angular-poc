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

}
