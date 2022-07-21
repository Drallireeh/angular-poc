import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popin-simple',
  templateUrl: './popin-simple.component.html',
  styleUrls: ['./popin-simple.component.less']
})
export class PopinSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closePopin(event: any): void {
    event.target.closest('app-popin-simple').classList.add('hidden');
  }
}
