import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather-page/weather/weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AnotherComponent } from './another/another.component';
import { HeaderComponent } from './header/header.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    WeatherComponent,
    PageNotFoundComponent,
    AnotherComponent,
    HeaderComponent,
    WeatherFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
