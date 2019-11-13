import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Output() itemMoved = new EventEmitter<number>();

  constructor(private router: Router,
              private route: ActivatedRoute) {
    console.log('PaginatorComponent constructor()');
  }

  changeItem(direction: number) {
    console.log('PaginatorComponent changeItem() | direction:', direction);
    this.itemMoved.emit(direction);
  }
}
