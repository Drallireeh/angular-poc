import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule} from './header/header.module';
import { MenuModule } from './menu/menu.module';
import { PanelModule } from './panel/panel.module';
import { FooterComponent } from './footer/footer.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfElementsModule } from './list-of-elements/list-of-elements.module';
import { PanelBodyFiltersComponent } from './panel-body-filters/panel-body-filters.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PanelBodyFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    MenuModule,
    PanelModule,
    ListOfElementsModule,
    InputsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
