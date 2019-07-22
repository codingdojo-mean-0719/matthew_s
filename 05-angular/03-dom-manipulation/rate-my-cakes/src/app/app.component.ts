import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rate-my-cakes';
  cakes: any;
  newCake: any;
  showCake: any;
  newRating: any;

  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.getCakesFromService();
    this.newCake = { image: '', baker: '' }
    this.newRating = { rating: '', comment: '' }
  }
  getCakesFromService() {
    this.httpService.getCakes().subscribe(data => {
      console.log('got the cakes!', data);
      this.cakes = data;
      console.log(this.cakes);
    });
  }

  showCakes(cakeID) {
    console.log(cakeID);
    const observable = this.httpService.getCake(cakeID);
    observable.subscribe(data => {
      console.log('cake life baby!', data);
      this.showCake = [data];
    })
  }

  createCake() {
    this.httpService.addCake(this.newCake).subscribe(data => {
      console.log('adding Cake', data);
    });
    this.newCake = { image: '', baker: '' };
  }

  rateCake(cakeID, newRating) {
    this.httpService.rateCake(cakeID, this.newRating).subscribe(data => {
      console.log('adding rating', data);
    });
  }
}

