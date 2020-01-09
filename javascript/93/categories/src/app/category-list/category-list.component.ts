import { Component, Input } from '@angular/core';
import Category from '../shared/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input()
  categories: Category[];

  /*selectedCategory: Category;

  categorySelected(selectedCategory: string) {
    this.selectedCategory = this.categories.find(c => c.name === selectedCategory);
  }*/

  selectedCategoryIndex = 0;

  /*categorySelected(selectedCategoryIndex: string) {
    this.selectedCategoryIndex = +selectedCategoryIndex;
  }*/
}
