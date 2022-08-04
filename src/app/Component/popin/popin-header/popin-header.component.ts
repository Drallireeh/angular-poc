import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'popin-header',
  templateUrl: './popin-header.component.html',
  styleUrls: ['./popin-header.component.less']
})
export class PopinHeaderComponent implements OnInit {

  constructor() { }

  @Input() title!: string; 
  @Output() closePopup = new EventEmitter<void>;

  ngOnInit(): void {
  }

  closePopin(event: any): void {
    //event.target.closest('next-popin-simples').classList.add('hidden');
    this.closePopup.emit();
  }
}
