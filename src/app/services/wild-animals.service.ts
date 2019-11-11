import { Injectable } from '@angular/core';
import {WildModel} from '../models/WildModel';
import {HttpClient} from '@angular/common/http';
import {BirdModel} from '../models/BirdModel';

@Injectable({
  providedIn: 'root'
})
export class WildAnimalsService {
  wildAnimalsList: WildModel[] = [];
  currentWildAnimal: WildModel;
  currentWildAnimalIndex = 0;

  constructor(private http: HttpClient) {
    console.log('WildAnimalsService constructor()');
    this.http.get('https://raw.githubusercontent.com/kosemMG/avratech-ng-zoo/master/src/assets/json/wild-animals.json')
      .subscribe(data => {
        this.wildAnimalsList = data as WildModel[];
        this.currentWildAnimal = this.wildAnimalsList[0];
      });
  }
}
