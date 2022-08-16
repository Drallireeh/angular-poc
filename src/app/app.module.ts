import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './Component/headerDoss/header/header.module';
import { MenuModule } from './Component/menuDoss/menu/menu.module';
import { PanelModule } from './Component/panelDoss/panel/panel.module';
import { FooterComponent } from './Component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListAllergiesModule } from './Component/Views/list-allergies/list-allergies.module';
import { ListOfPokemonModule } from './Component/Views/list-of-pokemon/list-of-pokemon.module';
import { PanelBodyFiltersComponent } from './Component/panelDoss/panel-body-filters/panel-body-filters.component';
import { AllergiesPathologiesComponent } from './Component/Views/allergies-pathologies/allergies-pathologies.component';
import { PrescriptionComponent } from './Component/Views/prescriptionDoss/prescription/prescription.component';
import { PanelActionsComponent } from './Component/panelDoss/panel-actions/panel-actions.component';
import { HttpClientModule } from '@angular/common/http';
import { PrescriptionBodyComponent } from './Component/Views/prescriptionDoss/prescription-body/prescription-body.component';
import { PopinSimpleComponent } from './Component/popin/popin-simple/popin-simple.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatTabsModule } from '@angular/material/tabs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MatSelectModule } from '@angular/material/select';
import { DropdownComponent } from './Component/dropdown/dropdown.component';
import { DropdownContentComponent } from './Component/dropdown-content/dropdown-content.component';
import { NextInputWithPopinComponent } from './Component/next-input-with-popin/next-input-with-popin.component';
import { PopinHeaderComponent } from './Component/popin/popin-header/popin-header.component';
import { PopinFooterComponent } from './Component/popin/popin-footer/popin-footer.component';
import { PopinBaseComponent } from './Component/popin/popin-base/popin-base.component';
import { NextDropdownWithPopinComponent } from './Component/next-dropdown-with-popin/next-dropdown-with-popin.component';
import { PopinSimplesComponent } from './Component/popin/popin-simples/popin-simples.component';
import { PopinButtonComponent } from './Component/popin/popin-button/popin-button.component';
import { NextPopupModule } from './Component/next-popup/next-popup.module';
import { PopinButtonGommeComponent } from './Component/popin/popin-button-gomme/popin-button-gomme.component';
import { PopinButtonVirguleComponent } from './Component/popin/popin-button-virgule/popin-button-virgule.component';

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
    DropdownComponent,
    DropdownContentComponent, 
    NextInputWithPopinComponent,
    PopinHeaderComponent,
    PopinFooterComponent,
    PopinBaseComponent,
    NextDropdownWithPopinComponent,
    PopinSimplesComponent,
    PopinButtonComponent,
    PopinButtonGommeComponent,
    PopinButtonVirguleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    MenuModule,
    PanelModule,
    ListAllergiesModule,
    ListOfPokemonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatTabsModule,
    DateInputsModule,
    MatSelectModule,
    NextPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
