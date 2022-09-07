import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'next-input-number',
  templateUrl: './next-input-number.component.html',
  styleUrls: ['./next-input-number.component.less']
})
export class NextInputNumberComponent implements OnInit {

  constructor() { }

  noValid = false; 
  error = false;
  errorInput = "Champs mal renseigné";
  @Input() maxValue!:number; 
  @Input() minValue!:number; 

  ngOnInit(): void {
  }

  validate(event:any) {
    var val: number = +event.target.value
    if(val > this.maxValue){
      this.noValid = true;
      this.errorInput = `La valeur est trop élevée, elle doit être inéferieure à ${this.maxValue}`;
      this.error = true;
    }
    else if(val < this.minValue){
      this.noValid = true;
      this.errorInput = `La valeur est trop basse, elle doit être supérieure à ${this.minValue}`;
      this.error = true;
    }
    else {
      this.noValid = false;
    }
  }

  showErr(){
    if(this.noValid){
      this.error = true;
    }
    else {
      this.error = false
    }
  }
  hideErr(){
    this.error = false;
  }
  
}
