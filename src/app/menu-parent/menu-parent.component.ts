import { Component, OnInit } from '@angular/core';
import { MenuItemInterface } from '../menu-item-interface';

@Component({
	selector: 'app-menu-parent',
	templateUrl: './menu-parent.component.html',
	styleUrls: ['./menu-parent.component.less']
})
export class MenuParentComponent implements OnInit {
	menuItems: MenuItemInterface[] = [
		{
			label: "test",
			htmlId: "test",
			icone: "faCapsule",
			url: "https://",
			partial: true
		},
		{
			label: "Label 2",
			htmlId: "Label 2",
			icone: "faUser",
			url: "https://",
			partial: false
		}
	];

	constructor() { }

	ngOnInit(): void {
	}
}
