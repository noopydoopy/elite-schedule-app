import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

/*
  Generated class for the EliteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApiProvider {

  private baseUrl : string = 'https://elite-schedule-app-i2-c9b16.firebaseio.com';
  constructor(public http: Http) {
    
  }

  getTourments() : Observable<any[]> {
    return this.http.get(`${this.baseUrl}/tournaments.json`).map(response => {
      return response.json();
    });
  }

  getTournamentData(id) : Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${id}.json`).map(response => {
      return response.json();
    });
  }

}
