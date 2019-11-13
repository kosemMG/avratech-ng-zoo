import { Component, OnInit } from '@angular/core';
import {PagingService} from '../../../services/paging.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private pagingService: PagingService) {
    console.log('NavigationComponent constructor()');
  }
  // constructor() {
  //   console.log('NavigationComponent constructor()');
  // }

  ngOnInit() {
  }

  // onNavigateTo(feature: string) {
  //   this.pagingService.currentPanel = feature;
  // }
}
