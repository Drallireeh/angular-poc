import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule} from './Component/headerDoss/header/header.module';
import { MenuModule } from './Component/menuDoss/menu/menu.module';
import { PanelModule } from './Component/panelDoss/panel/panel.module';
import { FooterComponent } from './Component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfElementsModule } from './Component/Views/list-of-elements/list-of-elements.module';
import { ListOfPokemonModule } from './Component/Views/list-of-pokemon/list-of-pokemon.module';
import { PanelBodyFiltersComponent } from './Component/panelDoss/panel-body-filters/panel-body-filters.component';
import { AllergiesPathologiesComponent } from './Component/Views/allergies-pathologies/allergies-pathologies.component';
import { PrescriptionComponent } from './Component/Views/prescriptionDoss/prescription/prescription.component';
import { PanelActionsComponent } from './Component/panelDoss/panel-actions/panel-actions.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './Component/Views/pokemon-detail/pokemon-detail.component';
import { PrescriptionBodyComponent } from './Component/Views/prescriptionDoss/prescription-body/prescription-body.component';
import { PopinSimpleComponent } from './Component/popin/popin-simple/popin-simple.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PanelBodyFiltersComponent,
    AllergiesPathologiesComponent,
    PrescriptionComponent,
    PanelActionsComponent,
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
    ListOfPokemonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
