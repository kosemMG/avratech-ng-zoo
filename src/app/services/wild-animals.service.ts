import { Injectable } from '@angular/core';
import {WildModel} from '../models/WildModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WildAnimalsService {
  list: WildModel[] = [];
  currentAnimal: WildModel;
  currentIndex = 0;

  constructor(private http: HttpClient) {
    console.log('WildAnimalsService constructor()');
    this.http.get('https://raw.githubusercontent.com/kosemMG/avratech-ng-zoo/master/src/assets/json/wild-animals.json')
      .subscribe(data => {
        this.list = data as WildModel[];
        this.currentAnimal = this.list[0];
      });
  }
}
