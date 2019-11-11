import { Component } from '@angular/core';
import {WildAnimalsService} from '../../../services/wild-animals.service';
import {BirdModel} from '../../../models/BirdModel';
import {WildModel} from '../../../models/WildModel';

@Component({
  selector: 'app-wild-animals-panel',
  templateUrl: './wild-animals-panel.component.html',
  styleUrls: ['./wild-animals-panel.component.css']
})
export class WildAnimalsPanelComponent {

  constructor(private wildService: WildAnimalsService) {
    console.log('WildAnimalsPanelComponent constructor()');
  }

  navigateTo(animal: WildModel) {
    console.log('WildAnimalsPanelComponent navigateTo() | event:', animal);
    this.wildService.currentWildAnimal = animal;
  }

}
