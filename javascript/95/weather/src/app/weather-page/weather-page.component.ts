import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Weather } from '../shared/weather';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {
  weather: Observable<Weather>;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    /*const zip = this.route.snapshot.paramMap.get('zip');
    const units = this.route.snapshot.paramMap.get('units');
    this.getWeather(zip, units);*/

    this.weather = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const zip = params.get('zip');
        const units = params.get('units');

        if (zip && units) {
          return this.weatherService.getWeather(zip, units);
        } else {
          const currentWeather = this.weatherService.getCurrentWeatherParams();
          if (currentWeather.zip && currentWeather.units) {
            this.router.navigate(['/weather', { zip: currentWeather.zip, units: currentWeather.units }]);
          }
          return of(null);
        }
      }));

    /*this.weather =*/ /*this.route.paramMap.pipe(
    map((params: ParamMap) => {
      const zip = params.get('zip');
      const units = params.get('units');
      return this.weatherService.getWeather(zip, units);
    })).subscribe(weatherObservable => {
      this.weather = weatherObservable;
    });*/
  }

  /*getWeather(zip: string, units: string) {
    this.weather = this.weatherService.getWeather(zip, units);
  }*/
}
