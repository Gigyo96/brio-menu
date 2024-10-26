import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { ViennoiseriesComponent } from './pages/viennoiseries/viennoiseries.component';
import { DividerComponent } from './components/divider/divider.component';
import { BriocheLievitatiComponent } from './pages/brioche-lievitati/brioche-lievitati.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuSectionComponent,
    ViennoiseriesComponent,
    DividerComponent,
    BriocheLievitatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }