import { Component } from '@angular/core';
import {PagingService} from './services/paging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avratech-ng-zoo';

  constructor(private pagingService: PagingService) {
    console.log('AppComponent constructor()');
  }

  changePanel() {
    switch (this.pagingService.currentPanel) {
      case 'birds':
        break;
      case 'livestock':
        break;
      case 'wild-animals':
        break;
    }
  }
}
