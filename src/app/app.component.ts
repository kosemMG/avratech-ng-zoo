import {Component} from '@angular/core';
import {PagingService} from './services/paging.service';
import {BirdsService} from './services/birds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avratech-zoo';

  constructor(private pagingService: PagingService,
              private birdsService: BirdsService) {
    console.log('AppComponent constructor()');
  }

  switchItem(direction: number) {
    console.log('AppComponent switchItem() | direction:', direction);
    switch (this.pagingService.currentPanel) {
      case 'birds':
        const birds = this.birdsService.birdsList;
        const newBirdIndex = this.getNewCurrentIndex(this.birdsService.currentBirdIndex, direction, birds);
        this.birdsService.currentBirdIndex = newBirdIndex;
        this.birdsService.currentBird = birds[newBirdIndex];
        break;
      case 'livestock':
        break;
      case 'wild-animals':
        break;
    }
  }

  private getNewCurrentIndex(currentIndex: number, direction: number, animalsList: {}[]): number {
    const max = animalsList.length - 1;
    let newIndex = currentIndex + direction;
    if (newIndex > max) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = max;
    }
    return newIndex;
  }
}
