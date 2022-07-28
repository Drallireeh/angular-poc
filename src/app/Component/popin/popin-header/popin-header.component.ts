import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'popin-header',
  templateUrl: './popin-header.component.html',
  styleUrls: ['./popin-header.component.less']
})
export class PopinHeaderComponent implements OnInit {

  constructor() { }

  @Input() title!: string; 

  ngOnInit(): void {
  }

  closePopin(event: any): void {
    event.target.closest('app-popin-simple').classList.add('hidden');
  }
}
