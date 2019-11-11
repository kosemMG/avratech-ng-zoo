import { Component, OnInit } from '@angular/core';
import {BirdsService} from '../../../services/birds.service';

@Component({
  selector: 'app-birds-card',
  templateUrl: './birds-card.component.html',
  styleUrls: ['./birds-card.component.css']
})
export class BirdsCardComponent implements OnInit {

  constructor(private birdsService: BirdsService) {
    console.log('BirdsCardComponent constructor()');
  }

  ngOnInit() {
  }

}
