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
				label: "Allergies / Pathologies",
				icone: "",
				url: "/allergies",
				htmlId: "",
				partial: false
			},
			{
				label: "Prescription",
				icone: "",
				htmlId: "",
				url: "/prescription",
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
				url: "",
				partial: true
			},
			{
				label: "Label 1",
				icone: "",
				htmlId: "",
				url: "",
				partial: false
			}
		]
	},
	];

	constructor() { }

	ngOnInit(): void {
	}

}
