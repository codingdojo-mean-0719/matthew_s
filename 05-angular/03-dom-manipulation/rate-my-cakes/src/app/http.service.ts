import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
    this.getCakes();
  }

  getCakes() {
    return this.http.get('/cakes');
  }

  getCake(cakeID) {
    console.log('ID is: ', cakeID);
    return this.http.get('/cakes/' + cakeID);
  }

  addCake(newCake) {
    return this.http.post('/cakes/new', newCake);
  }

  rateCake(cakeID, rateCake) {
    return this.http.post('/cakes/' + cakeID + '/rate', rateCake);
  }
}
