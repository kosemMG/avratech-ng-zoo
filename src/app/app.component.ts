import {Component} from '@angular/core';
import {PagingService} from './services/paging.service';
import {BirdsService} from './services/birds.service';
import {LivestockService} from './services/livestock.service';
import {WildAnimalsService} from './services/wild-animals.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avratech-zoo';
  url: string;

  constructor(private pagingService: PagingService,
              private birdsService: BirdsService,
              private livestockService: LivestockService,
              private wildService: WildAnimalsService,
              private route: ActivatedRoute,
              private router: Router) {
    console.log('AppComponent constructor()');
  }

  switchItem(direction: number) {
    console.log('AppComponent switchItem() | direction:', direction, 'case:', this.pagingService.currentPanel);
    // switch (this.pagingService.currentPanel) {
    this.url = window.location.pathname;
    console.log('url:', this.url);
    switch (this.url) {
      case '':
        break;
      case '/birds':
        this.setNewData(this.birdsService, direction);
        break;
      case '/livestock':
        this.setNewData(this.livestockService, direction);
        break;
      case '/wild':
        this.setNewData(this.wildService, direction);
        break;
    }
  }

  private setNewData(service: any, direction: number) {
    console.log('AppComponent setNewData() | service:', service, 'direction:', direction);
    const animals = service.list;
    const newIndex = this.getNewCurrentIndex(service.currentIndex, direction, animals);
    service.currentIndex = newIndex;
    service.currentAnimal = animals[newIndex];
    console.log('currentIndex:', service.currentIndex, 'currentAnimal:', service.currentAnimal);
  }

  private getNewCurrentIndex(currentIndex: number, direction: number, animalsList: {}[]): number {
    console.log('AppComponent getNewCurrentIndex() | currentIndex:', currentIndex, 'direction:', direction, 'animalsList:', animalsList);
    const max = animalsList.length - 1;
    let newIndex = currentIndex + direction;
    if (newIndex > max) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = max;
    }
    console.log('AppComponent getNewCurrentIndex return:', newIndex);
    return newIndex;
  }
}
