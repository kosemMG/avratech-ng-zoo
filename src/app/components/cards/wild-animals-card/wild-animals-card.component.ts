import { Component, OnInit } from '@angular/core';
import {WildAnimalsService} from '../../../services/wild-animals.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-wild-animals-card',
  templateUrl: './wild-animals-card.component.html',
  styleUrls: ['./wild-animals-card.component.css']
})
export class WildAnimalsCardComponent implements OnInit {

  constructor(private wildService: WildAnimalsService,
              private route: ActivatedRoute) {
    console.log('WildAnimalsCardComponent constructor()');
  }

  ngOnInit() {
    setTimeout(() => {
      this.wildService.currentAnimal = this.getBird();
      this.route.params
        .subscribe(() => {
          this.wildService.currentAnimal = this.getBird();
        });
    });
  }

  private getBird() {
    const birdId = +this.route.snapshot.params.id;
    for (const bird of this.wildService.list) {
      if (bird.id === birdId) {
        return bird;
      }
    }
  }
}
