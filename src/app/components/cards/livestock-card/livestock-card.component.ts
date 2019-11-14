import { Component, OnInit } from '@angular/core';
import {LivestockService} from '../../../services/livestock.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-livestock-card',
  templateUrl: './livestock-card.component.html',
  styleUrls: ['./livestock-card.component.css']
})
export class LivestockCardComponent implements OnInit {

  constructor(private livestockService: LivestockService,
              private route: ActivatedRoute) {
    console.log('LivestockCardComponent constructor()');
  }

  ngOnInit() {
    setTimeout(() => {
      this.livestockService.currentAnimal = this.getBird();
      this.route.params
        .subscribe(() => {
          this.livestockService.currentAnimal = this.getBird();
        });
    });
  }

  private getBird() {
    const birdId = +this.route.snapshot.params.id;
    for (const bird of this.livestockService.list) {
      if (bird.id === birdId) {
        return bird;
      }
    }
  }
}
