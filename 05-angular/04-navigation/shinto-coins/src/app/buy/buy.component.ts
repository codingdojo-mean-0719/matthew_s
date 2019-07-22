import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  balance = {};
  num: any;
  constructor(private shintoService: ShintoService) {
    this.balance = this.shintoService.getValue();

  }

  ngOnInit() {
    this.num = { number: '' };
  }

  buyCoins() {
    console.log(this.num.number);
    this.balance = this.shintoService.buyCoins(this.num.number);
  }
}
