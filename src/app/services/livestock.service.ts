import { Injectable } from '@angular/core';
import {LivestockModel} from '../models/LivestockModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivestockService {
  list: LivestockModel[] = [];
  currentAnimal: LivestockModel;
  currentIndex = 0;

  constructor(private http: HttpClient) {
    console.log('LivestockService constructor()');
    this.http.get('https://raw.githubusercontent.com/kosemMG/avratech-ng-zoo/master/src/assets/json/livestock.json')
      .subscribe(data => {
        this.list = data as LivestockModel[];
        this.currentAnimal = this.list[0];
      });
  }
}
