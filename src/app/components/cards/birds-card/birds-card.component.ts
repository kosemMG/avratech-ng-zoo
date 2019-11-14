import { Component, OnInit } from '@angular/core';
import {BirdsService} from '../../../services/birds.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-birds-card',
  templateUrl: './birds-card.component.html',
  styleUrls: ['./birds-card.component.css']
})
export class BirdsCardComponent implements OnInit {

  constructor(private birdsService: BirdsService,
              private route: ActivatedRoute) {
    console.log('BirdsCardComponent constructor()');
  }

  ngOnInit() {
    setTimeout(() => {
      this.birdsService.currentAnimal = this.getBird();
      this.route.params
        .subscribe(() => {
          this.birdsService.currentAnimal = this.getBird();
        });
    });
  }

  private getBird() {
    console.log('BirdCardComponent private getBird()');
    const birdId = +this.route.snapshot.params.id;
    for (const bird of this.birdsService.list) {
      if (bird.id === birdId) {
        return bird;
      }
    }
  }
}
