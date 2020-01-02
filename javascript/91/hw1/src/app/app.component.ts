import { Component, ViewEncapsulation } from '@angular/core';
import { Person } from './shared/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']// ,
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Welcome to Angular';

  person: Person = {
    firstName: 'Donald',
    lastName: 'Trump',
    address: {
      street: '1600 Pennsylvania Ave',
      city: 'Washington',
      state: 'D.C.',
      zip: '12345'
    }
  };
}
