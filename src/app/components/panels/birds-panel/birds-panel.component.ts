import {Component, Output} from '@angular/core';
import {BirdsService} from '../../../services/birds.service';
import {BirdModel} from '../../../models/BirdModel';

@Component({
  selector: 'app-birds-panel',
  templateUrl: './birds-panel.component.html',
  styleUrls: ['./birds-panel.component.css']
})
export class BirdsPanelComponent {

  constructor(private birdsService: BirdsService) {
    console.log('BirdsPanelComponent constructor()');
  }

  navigateTo(bird: BirdModel) {
    console.log('BirdsPanelComponent navigateTo() | bird:', bird);
    this.birdsService.currentBird = bird;
  }
}
