import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor() {
    console.log('NavigationComponent constructor()');
  }
  // constructor() {
  //   console.log('NavigationComponent constructor()');
  // }

  // onNavigateTo(feature: string) {
  //   this.pagingService.currentPanel = feature;
  // }
}
