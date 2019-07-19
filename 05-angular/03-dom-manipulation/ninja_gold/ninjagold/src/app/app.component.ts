import { Component, OnInit } from '@angular/core';
import { GoldService } from './gold.service';
import { GoldCount } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  gold = new GoldCount();
  activity: string[] = [];
  count: number;
  constructor(private goldService: GoldService) {}

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.count = 0;
  }

  onFarm(event: Event) {
    console.log('yeehaw bitch!');
    const randomNum: number = Math.floor(Math.random() * (20 - 10) + 10);
    this.count += randomNum;
    this.activity.push(
      `You're chilling on a farm and have earned ${randomNum} gold`
    );
    console.log(this.activity);
  }

  onCave() {
    console.log('splunk bitch!');
    const randomNum: number = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    this.count += randomNum;
    this.activity.push(
      `You entered the cave and have earned ${randomNum} gold`
    );
    console.log(this.activity);
  }

  onHouse() {
    console.log('lazy bitch!');
    const randomNum: number = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    this.count += randomNum;
    this.activity.push(
      `You're lounging in the house, and found ${randomNum} gold in the couch`
    );
    console.log(this.activity);
  }

  onCasino() {
    console.log('Gambling Time!');
    const randomNum: number = Math.floor(Math.random() * (50 - -50 + 1) + -50);
    this.count += randomNum;
    if (randomNum > 0) {
      this.activity.push(`You entered a Casino, and won ${randomNum} gold.`);
    } else {
      this.activity.push(`You entered a Casino, and lost ${randomNum} gold.`);
    }

    console.log(this.activity);
  }
}
