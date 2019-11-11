import { Injectable } from '@angular/core';
import {LivestockModel} from '../models/LivestockModel';
import {HttpClient} from '@angular/common/http';
import {BirdModel} from '../models/BirdModel';

@Injectable({
  providedIn: 'root'
})
export class LivestockService {
  livestockList: LivestockModel[] = [];
  currentAnimal: LivestockModel;
  currentAnimalIndex = 0;

  constructor(private http: HttpClient) {
    console.log('LivestockService constructor()');
    this.http.get('https://raw.githubusercontent.com/kosemMG/avratech-ng-zoo/master/src/assets/json/livestock.json')
      .subscribe(data => {
        this.livestockList = data as LivestockModel[];
        this.currentAnimal = this.livestockList[0];
      });
  }
}
