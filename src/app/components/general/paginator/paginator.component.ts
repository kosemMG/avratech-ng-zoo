import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent{
  @Output() itemMoved = new EventEmitter<number>();

  constructor() {
    console.log('PaginatorComponent constructor()');
  }

  changeItem(direction: number) {
    console.log('PaginatorComponent changeItem() | direction:', direction);
    this.itemMoved.emit(direction);
  }
}
