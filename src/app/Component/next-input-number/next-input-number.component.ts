import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'next-input-number',
  templateUrl: './next-input-number.component.html',
  styleUrls: ['./next-input-number.component.less']
})
export class NextInputNumberComponent implements OnInit {

  constructor() { }

  noValid = false; 
  @Input() maxValue!:number; 
  @Input() minValue!:number; 

  ngOnInit(): void {
  }

  test() {
    console.log(this.maxValue, this.minValue)
  }
  
}
