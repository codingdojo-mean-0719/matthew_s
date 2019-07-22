import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apikey: string;
  constructor(private http: HttpClient) {
    this.apikey = 'fbd54dc0ba4bf482e514d79f9a762c2a';
  }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}`)
  }
}
