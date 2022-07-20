import { Component, OnInit, Input } from '@angular/core';
import { faBars, faCapsules, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less'],
})
export class MenuItemComponent implements OnInit {
  @Input() label!: string;
  @Input() icone!: string;
  @Input() url!: string;
  @Input() htmlId!: string;
  @Input() partial!: boolean;

  faBars = faBars;
	faCapsules = faCapsules;
	faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
