import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryInfoComponent } from './category-list/category-info/category-info.component';
import { ItemListComponent } from './category-list/item-list/item-list.component';
import { ItemComponent } from './category-list/item-list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryInfoComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
