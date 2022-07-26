import { NgModule, LOCALE_ID } from '@angular/core';

// Load all required data for the bg locale
import { registerLocaleData } from '@angular/common';
import "@progress/kendo-angular-intl/locales/fr/all";
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { PopinDoubleComponent } from './Component/popin/popin-double/popin-double.component';
import { PopinHoraireSimpleComponent } from './Component/popin/popin-horaire-simple/popin-horaire-simple.component';
import { SlidingPanelModule } from './Component/SlidingPanel/sliding-panel/sliding-panel.module';
import { NextCheckboxComponent } from './Component/next-checkbox/next-checkbox.component';
import { BtnsAsRadioModule } from './Component/btns-as-radio/btns-as-radio.module';
import { UpdateAllergieComponent } from './Component/PartialViews/update-allergie/update-allergie.component';
import { CancelSlidingButtonComponent } from './Component/SlidingPanel/cancel-sliding-button/cancel-sliding-button.component';
import { PopinCalendarComponent } from './Component/popin/popin-calendar/popin-calendar.component';
import { NextCalendarComponent } from './Component/next-calendar/next-calendar.component';
import { SearchAllergiesComponent } from './Component/Views/search-allergies/search-allergies.component';
import { PopinDatepickerComponent } from './Component/popin/popin-datepicker/popin-datepicker.component';
import { NextInputNumberComponent } from './Component/next-input-number/next-input-number.component';
import { ListeMedToAddAllergieComponent } from './Component/PartialViews/liste-med-to-add-allergie/liste-med-to-add-allergie.component';
import { PopinDateApproxComponent } from './Component/popin/popin-date-approx/popin-date-approx.component';
import { AddLineComponent } from './Component/PartialViews/AddAllergies/add-line/add-line.component';

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
    PopinDoubleComponent,
    PopinHoraireSimpleComponent,
    NextCheckboxComponent,
    UpdateAllergieComponent,
    CancelSlidingButtonComponent,
    PopinCalendarComponent,
    NextCalendarComponent,
    SearchAllergiesComponent,
    PopinDatepickerComponent,
    NextInputNumberComponent,
    ListeMedToAddAllergieComponent,
    PopinDateApproxComponent,
    AddLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    MenuModule,
    PanelModule,
    SlidingPanelModule,
    ListAllergiesModule,
    ListOfPokemonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatTabsModule,
    DateInputsModule,
    MatSelectModule,
    MatDatepickerModule,
    NextPopupModule,
    BtnsAsRadioModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
