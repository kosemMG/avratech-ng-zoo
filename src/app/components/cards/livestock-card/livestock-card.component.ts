import { Component, OnInit } from '@angular/core';
import {LivestockService} from '../../../services/livestock.service';

@Component({
  selector: 'app-livestock-card',
  templateUrl: './livestock-card.component.html',
  styleUrls: ['./livestock-card.component.css']
})
export class LivestockCardComponent implements OnInit {

  constructor(private livestockService: LivestockService) {
    console.log('LivestockCardComponent constructor()');
  }

  ngOnInit() {
  }

}
