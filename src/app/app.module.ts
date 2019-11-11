import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { NavigationComponent } from './components/general/navigation/navigation.component';
import { LivestockPanelComponent } from './components/panels/livestock-panel/livestock-panel.component';
import { BirdsPanelComponent } from './components/panels/birds-panel/birds-panel.component';
import { WildAnimalsPanelComponent } from './components/panels/wild-animals-panel/wild-animals-panel.component';
import { WildAnimalsCardComponent } from './components/cards/wild-animals-card/wild-animals-card.component';
import { BirdsCardComponent } from './components/cards/birds-card/birds-card.component';
import { LivestockCardComponent } from './components/cards/livestock-card/livestock-card.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { PaginatorComponent } from './components/general/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LivestockPanelComponent,
    BirdsPanelComponent,
    WildAnimalsPanelComponent,
    WildAnimalsCardComponent,
    BirdsCardComponent,
    LivestockCardComponent,
    FooterComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
