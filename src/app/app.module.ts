import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule} from './header/header.module';
import { MenuModule } from './menu/menu.module';
import { PanelModule } from './panel/panel.module';
import { FooterComponent } from './footer/footer.component';
import { ListeAllergiesComponent } from './liste-allergies/liste-allergies.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListeAllergiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    MenuModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
