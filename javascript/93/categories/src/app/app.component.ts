import { Component } from '@angular/core';
import Category from './shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'categories';

  categories: Category[] = [{
    name: 'Produce',
    items: [{
      name: 'Grapes',
      price: 2.99
    }, {
      name: 'Apples',
      price: 1.30
    }]
  }, {
    name: 'Bakery',
    items: [{
      name: 'Bread',
      price: 3.25
    }, {
      name: 'Danish',
      price: 1.25
    }]
  }, {
    name: 'Electronics'/*,
    items: []*/
  }];
}
