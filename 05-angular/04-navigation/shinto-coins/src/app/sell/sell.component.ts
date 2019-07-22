import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  balance = {};
  num: any;
  constructor(private shintoService: ShintoService) {
    this.balance = this.shintoService.getValue();
  }

  ngOnInit() {
    this.num = { number: '' };
  }

  sellCoins() {
    this.balance = this.shintoService.sellCoins(this.num.number);
  }
}
