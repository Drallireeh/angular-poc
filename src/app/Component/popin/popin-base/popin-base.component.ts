import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-popin-base',
  templateUrl: './popin-base.component.html',
  styleUrls: ['./popin-base.component.less']
})
export class PopinBaseComponent implements OnInit {

  constructor() { }

  @Input() title!: string; 
  @Input() show!: string;
  @Output() closePopup = new EventEmitter<void>;

  ngOnInit(): void {
  }

  closePopin(): void {
    console.log("lcic");
    this.closePopup.emit();

    //event.target.closest('next-popin-simples').classList.add('hidden');
  }

  selectNumber(event: any): void {
    let number = event.target.closest('button').textContent;
    let appPopin = event.target.closest('app-popin-simple');
    appPopin.parentNode.firstChild.value = number;
    appPopin.classList.add('hidden');
  }
}