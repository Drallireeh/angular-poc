import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header.component';
import { HeaderIconComponent } from '../header-icon/header-icon.component';
import { HeaderTitleComponent } from '../header-title/header-title.component';
import { HeaderAppNameComponent } from '../header-app-name/header-app-name.component';
import { HeaderUserDataComponent } from '../header-user-data/header-user-data.component';

@NgModule({
	declarations: [
		HeaderComponent,
		HeaderIconComponent,
		HeaderAppNameComponent,
		HeaderTitleComponent,
		HeaderUserDataComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule
	],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule { }
