import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent {
  constructor(private router: Router) { }

  getWeather(zip: string, units: string) {
    this.router.navigate(['\weather', { zip, units }]);
  }
}
