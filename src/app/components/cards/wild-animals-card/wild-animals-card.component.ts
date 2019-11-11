import { Component, OnInit } from '@angular/core';
import {WildAnimalsService} from '../../../services/wild-animals.service';

@Component({
  selector: 'app-wild-animals-card',
  templateUrl: './wild-animals-card.component.html',
  styleUrls: ['./wild-animals-card.component.css']
})
export class WildAnimalsCardComponent implements OnInit {

  constructor(private wildService: WildAnimalsService) {
    console.log('WildAnimalsCardComponent constructor()');
  }

  ngOnInit() {
  }

}
