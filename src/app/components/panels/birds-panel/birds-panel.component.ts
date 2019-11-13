import {Component, OnInit, Output} from '@angular/core';
import {BirdsService} from '../../../services/birds.service';
import {BirdModel} from '../../../models/BirdModel';
import {PagingService} from '../../../services/paging.service';

@Component({
  selector: 'app-birds-panel',
  templateUrl: './birds-panel.component.html',
  styleUrls: ['./birds-panel.component.css']
})
export class BirdsPanelComponent implements OnInit {
  panel = 'birds';

  constructor(private birdsService: BirdsService,
              private pagingService: PagingService) {
    console.log('BirdsPanelComponent constructor()');
  }

  ngOnInit(): void {
    this.pagingService.currentPanel = this.panel;
  }

  navigateTo(bird: BirdModel) {
    console.log('BirdsPanelComponent navigateTo() | bird:', bird);
    this.birdsService.currentAnimal = bird;
    this.birdsService.currentIndex = this.birdsService.list.indexOf(bird);
  }
}
