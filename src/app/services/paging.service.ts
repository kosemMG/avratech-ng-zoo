import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {
  currentPanel = 'birds';

  constructor() {
    console.log('PagingService constructor()');
  }
}
