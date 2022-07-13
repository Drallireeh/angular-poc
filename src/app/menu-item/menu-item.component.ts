import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {
  @Input() label!: string;
  @Input() icone!: string;
  @Input() url!: string;
  @Input() htmlId!: string;
  @Input() partial!: boolean;
  // item!: MenuItemInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
