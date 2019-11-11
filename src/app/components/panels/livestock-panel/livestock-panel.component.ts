import { Component } from '@angular/core';
import {LivestockService} from '../../../services/livestock.service';
import {LivestockModel} from '../../../models/LivestockModel';

@Component({
  selector: 'app-livestock-panel',
  templateUrl: './livestock-panel.component.html',
  styleUrls: ['./livestock-panel.component.css']
})
export class LivestockPanelComponent {

  constructor(private livestockService: LivestockService) {
    console.log('LivestockPanelComponent constructor()');
  }

  navigateTo(animal: LivestockModel) {
    console.log('LivestockPanelComponent navigateTo() | animal:', animal);
    this.livestockService.currentAnimal = animal;
    this.livestockService.currentIndex = this.livestockService.list.indexOf(animal);
  }
}
