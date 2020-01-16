import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnotherComponent } from './another/another.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';

const routes: Routes = [{
  path: 'weather',
  component: WeatherPageComponent
}, /*{
  path: 'weather/:zip/:units',
  component: WeatherPageComponent
},*/ {
  path: 'another',
  component: AnotherComponent
}, {
  path: '',
  redirectTo: 'weather',
  pathMatch: 'full'
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
