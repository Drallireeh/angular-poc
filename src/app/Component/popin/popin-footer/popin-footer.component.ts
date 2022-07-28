import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popin-footer',
  templateUrl: './popin-footer.component.html',
  styleUrls: ['./popin-footer.component.less']
})
export class PopinFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closePopin(event: any): void {
    event.target.closest('app-popin-simple').classList.add('hidden');
  }

}
