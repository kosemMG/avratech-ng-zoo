import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BirdsService} from '../../../services/birds.service';
import {LivestockService} from '../../../services/livestock.service';
import {WildAnimalsService} from '../../../services/wild-animals.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output() itemMoved = new EventEmitter<number>();
  private path: string;
  private id: number;
  private currentAnimalsArrayLength: number;

  constructor(private route: ActivatedRoute,
              private birdsService: BirdsService,
              private livestockService: LivestockService,
              private wildService: WildAnimalsService) {
    console.log('PaginatorComponent constructor()');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.id = +this.route.snapshot.params.id;
      this.route.params
        .subscribe((params: Params) => {
          this.path = '/' + this.getPanel();
          this.id = +params.id;
          this.serCurrentAnimalsArrayLength();
        });
    });
  }

  private serCurrentAnimalsArrayLength() {
    switch (this.path) {
      case '/birds':
        this.currentAnimalsArrayLength = this.birdsService.list.length;
        break;
      case '/livestock':
        this.currentAnimalsArrayLength = this.livestockService.list.length;
        break;
      case '/wild':
        this.currentAnimalsArrayLength = this.wildService.list.length;
        break;
    }
  }

  private getPanel() {
    const path = window.location.pathname;
    return path.split('/')[1];
  }

  // changeItem(direction: number) {
  //   console.log('PaginatorComponent changeItem() | direction:', direction);
  //   this.itemMoved.emit(direction);
  // }
}
