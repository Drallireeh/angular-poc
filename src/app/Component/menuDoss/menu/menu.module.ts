import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MenuComponent } from './menu.component';
import { MenuParentComponent } from '../menu-parent/menu-parent.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		MenuComponent,
		MenuParentComponent,
		MenuItemComponent,
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		RouterModule
	],
	exports: [
		MenuComponent
	]
})
export class MenuModule { }
