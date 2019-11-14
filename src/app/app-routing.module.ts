import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BirdsPanelComponent} from './components/panels/birds-panel/birds-panel.component';
import {LivestockPanelComponent} from './components/panels/livestock-panel/livestock-panel.component';
import {WildAnimalsPanelComponent} from './components/panels/wild-animals-panel/wild-animals-panel.component';
import {PageNotFoundComponent} from './components/general/page-not-found/page-not-found.component';
import {BirdsCardComponent} from './components/cards/birds-card/birds-card.component';
import {LivestockCardComponent} from './components/cards/livestock-card/livestock-card.component';
import {WildAnimalsCardComponent} from './components/cards/wild-animals-card/wild-animals-card.component';

const appRoutes: Routes = [
  {path: 'birds', component: BirdsPanelComponent, children: [
      {path: ':id', component: BirdsCardComponent}
    ]},
  {path: '', redirectTo: 'birds', pathMatch: 'full'},
  {path: 'livestock', component: LivestockPanelComponent, children: [
      {path: ':id', component: LivestockCardComponent}
    ]},
  {path: 'wild', component: WildAnimalsPanelComponent, children: [
      {path: ':id', component: WildAnimalsCardComponent}
    ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
