import { Component, Input, OnInit } from '@angular/core';
import { MenuItemInterface } from '../menu-item-interface';

@Component({
	selector: 'app-menu-parent',
	templateUrl: './menu-parent.component.html',
	styleUrls: ['./menu-parent.component.less']
})
export class MenuParentComponent implements OnInit {
	@Input() menuItems!: Array<MenuItemInterface>;

	constructor() { }

	ngOnInit(): void {
	}
}
