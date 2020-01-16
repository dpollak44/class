import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WeatherServerData, Weather } from './weather';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weather: BehaviorSubject<Weather> = new BehaviorSubject<Weather>(null);
  private lastZip: string;
  private lastUnits: string;

  constructor(private httpClient: HttpClient) { }

  getWeather(zip: string, units: string) {
    if ((zip && zip !== this.lastZip) || (units && units !== this.lastUnits)) {
      this.httpClient.get<WeatherServerData>
        (`http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${zip}&units=${units}`)
        .pipe(
          map(weatherData => {
            this.lastZip = zip;
            this.lastUnits = units;

            return {
              place: weatherData.name,
              temp: weatherData.main.temp,
              description: weatherData.weather[0].description,
              picture: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
            };
          })).subscribe(weather => this.weather.next(weather));
    }
    return this.weather.asObservable();
  }

  getCurrentWeatherParams() {
    return { zip: this.lastZip, units: this.lastUnits };
  }
}
