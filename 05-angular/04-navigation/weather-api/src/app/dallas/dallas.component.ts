import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.interface';
import { observable } from 'rxjs';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  status;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    let observable = this.weatherService.getWeather('dallas');
    observable.subscribe(weather => {
      this.weather = weather;
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
      this.maxTemp = weather.main.temp_max;
      this.maxTemp = Math.floor(this.maxTemp * (9 / 5) - 459.67);
      this.minTemp = weather.main.temp_min;
      this.minTemp = Math.floor(this.minTemp * (9 / 5) - 459.67);
      this.status = weather.weather[0].description;
      console.log(this.weather);
    });
  }

}
