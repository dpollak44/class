import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather-page/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
