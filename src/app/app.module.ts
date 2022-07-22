import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule} from './header/header.module';
import { MenuModule } from './menu/menu.module';
import { PanelModule } from './panel/panel.module';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfElementsModule } from './list-of-elements/list-of-elements.module';
import { PanelBodyFiltersComponent } from './panel-body-filters/panel-body-filters.component';
import { AllergiesPathologiesComponent } from './allergies-pathologies/allergies-pathologies.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PanelActionsComponent } from './panel-actions/panel-actions.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { NavigationOngletsComponent } from './navigation-onglets/navigation-onglets.component';
import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';
import { PrescriptionBodyComponent } from './prescription-body/prescription-body.component';
import { PopinSimpleComponent } from './popin-simple/popin-simple.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PanelBodyFiltersComponent,
    AllergiesPathologiesComponent,
    PrescriptionComponent,
    PanelActionsComponent,
    NavigationOngletsComponent,
    NavigationTabComponent,
    PrescriptionBodyComponent,
    PopinSimpleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    MenuModule,
    PanelModule,
    ListOfElementsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
