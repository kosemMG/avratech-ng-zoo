import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/general/home/home.component';
import {BirdsPanelComponent} from './components/panels/birds-panel/birds-panel.component';
import {LivestockPanelComponent} from './components/panels/livestock-panel/livestock-panel.component';
import {WildAnimalsPanelComponent} from './components/panels/wild-animals-panel/wild-animals-panel.component';
import {PageNotFoundComponent} from './components/general/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'birds', component: BirdsPanelComponent},
  {path: 'livestock', component: LivestockPanelComponent},
  {path: 'wild', component: WildAnimalsPanelComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
