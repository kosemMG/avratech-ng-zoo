import { Component, OnInit } from '@angular/core';
import {BirdsService} from '../../../services/birds.service';

@Component({
  selector: 'app-birds-panel',
  templateUrl: './birds-panel.component.html',
  styleUrls: ['./birds-panel.component.css']
})
export class BirdsPanelComponent implements OnInit {

  constructor(private birdsService: BirdsService) {
    console.log('BirdsPanelComponent constructor()');
  }

  ngOnInit() {
  }

}
