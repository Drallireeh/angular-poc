import { Component, OnInit, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'next-checkbox',
  templateUrl: './next-checkbox.component.html',
  styleUrls: ['./next-checkbox.component.less']
})
export class NextCheckboxComponent implements OnInit {

  constructor() { }

  faCheck = faCheck;
  @Input() isChecked!: boolean; 
  @Input() isCliquable!: boolean;

  ngOnInit(): void {
  }

  check(): void {
    console.log(this.isCliquable)
    if(this.isCliquable){
      this.isChecked = !this.isChecked;
    }
  }
}