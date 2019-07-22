import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  numbers: number[] = [];
  value: number;
  balance: number;
  transaction: {};
  purse: {};
  activity: object[] = [];
  message: string;

  constructor(private http: HttpClient) {
    this.value = 1.00;
    this.balance = 0;
  }

  getValue() {
    this.purse = {
      value: this.value,
      balance: this.balance,
    };
    return this.purse;
  }
  onMine() {
    this.value += 1;
    this.balance += 1;
    this.transaction = {
      value: this.value,
      balance: this.balance,
    };
    this.activity.push({ action: 'Mined', amount: this.balance, value: this.value });
    console.log(this.activity);
    return this.transaction;
  }

  buyCoins(num) {
    this.value += 1;
    this.balance += parseInt(num);
    this.transaction = {
      value: this.value,
      balance: this.balance,
    };
    this.activity.push({ action: 'Bought', amount: num, value: this.value });
    console.log(this.activity)
    return this.transaction;
  }

  sellCoins(num) {
    console.log("num: " + num)
    if (this.balance < 1) {
      this.message = 'Cant sell more than you have!';
      return this.message;
    } else {
      console.log("getting here?");
      this.value -= 1;
      console.log("value: " + this.value)
      this.balance -= parseInt(num);
      this.transaction = {
        value: this.value,
        balance: this.balance,
      }
      this.activity.push({ action: 'Sold', amount: num, value: this.value });
      console.log(this.activity);
      return this.transaction;
    }
  }

  getLedger() {
    return this.activity;
  }
}


