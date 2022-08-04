import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'next-popin-simples',
  templateUrl: './popin-simples.component.html',
  styleUrls: ['./popin-simples.component.less']
})
export class PopinSimplesComponent implements OnInit {
  title: any = '';
  disabled: string = '';

  @Input() showPops: boolean = false;

	@Input() changing!: Subject<boolean>;

  constructor() { }



  ctn = document.getElementsByClassName('.clavierTactileSimple');

  ngOnInit(): void {
    this.changing.subscribe(v => { 
			this.showPops = v;
		  });
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
    //popin.classList.add('hidden');
    this.changing.next(false);
  }

  erase(): void {
    if(this.title.slice(-1) == ','){
      this.disabled = '';
    }
    this.title = this.title.slice(0, -1); 
  }

  closePops(): void {
    this.changing.next(false);
  }
}