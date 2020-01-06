import { Component } from '@angular/core';
import Order from './shared/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw2';

  order: Order = {
    customer: {
      firstName: 'Donald',
      lastName: 'Trump',
      address: {
        street: '1600 Pennsylvania Ave',
        city: 'Washington',
        state: 'D.C.',
        zip: '12345'
      }// ,
      // friends: ['jared', 'mike', 'graham']
    },
    item: {
      name: 'Vase',
      price: 9.99
    },
    date: new Date('01/01/2020')
  };

  /*setTitle(newtitle: string) {
    this.title = newtitle;
  }*/
}
