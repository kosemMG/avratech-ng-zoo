import { Injectable } from '@angular/core';
import {BirdModel} from '../models/BirdModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {
  list: BirdModel[] = [];
  currentAnimal: BirdModel;
  currentIndex = 0;

  constructor(private http: HttpClient) {
    console.log('BirdsService constructor()');
    this.http.get('https://raw.githubusercontent.com/kosemMG/avratech-ng-zoo/master/src/assets/json/birds.json')
      .subscribe(data => {
        this.list = data as BirdModel[];
        this.currentAnimal = this.list[0];
      });
  }
}
