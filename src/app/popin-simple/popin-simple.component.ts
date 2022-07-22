import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popin-simple',
  templateUrl: './popin-simple.component.html',
  styleUrls: ['./popin-simple.component.less']
})
export class PopinSimpleComponent implements OnInit {

  constructor() { }


  @Input() title!: string; 

  ngOnInit(): void {
  }

  closePopin(event: any): void {
    event.target.closest('app-popin-simple').classList.add('hidden');
  }

  selectNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    let appPopin = event.target.closest('app-popin-simple');
    appPopin.parentNode.firstChild.value = number;
    appPopin.classList.add('hidden');
  }
}
