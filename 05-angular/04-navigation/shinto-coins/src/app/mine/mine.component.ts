import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  balance = {};
  answerQuestion: any;
  message: string;
  constructor(private shintoService: ShintoService) {
    this.balance = this.shintoService.getValue();
  }

  ngOnInit() {
    this.answerQuestion = { number: "" }
    this.message = '';
  }

  mineCoins() {
    if (this.answerQuestion.number === '8') {
      console.log("ye!");
      this.balance = this.shintoService.onMine();
      this.answerQuestion = { number: '' };
      this.message = 'Correct! The Value of the Shinto is increased by 1';
    }
    else {
      console.log("nope");
      this.answerQuestion = { number: '' };
      this.message = 'Incorrect! No Shinto Coins For You!';
    }
  }
}
