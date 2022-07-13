import { Component, OnInit } from '@angular/core';
import { MenuParentInterface } from '../menu-parent-interface';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
	menuParents: MenuParentInterface[] = [{
		items: [
			{
				label: "test",
				icone: "aucune",
				url: "https://",
				htmlId: "",
				partial: true
			},
			{
				label: "Label 2",
				icone: "",
				htmlId: "",
				url: "https://",
				partial: false
			}
		]
	},
	{
		items: [
			{
				label: "Test parent 2",
				icone: "aucune",
				htmlId: "",
				url: "https://",
				partial: true
			},
			{
				label: "Label 1",
				icone: "",
				htmlId: "",
				url: "https://",
				partial: false
			}
		]
	},
	];

	constructor() { }

	ngOnInit(): void {
	}

}
