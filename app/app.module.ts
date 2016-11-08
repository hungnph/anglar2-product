import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product.list-component';
import {ProductPipeFilter} from './products/product.pipe-filter';

@NgModule({
    imports: [
      BrowserModule, 
      FormsModule
    ],
    declarations: [
      AppComponent, 
      ProductListComponent, 
      ProductPipeFilter
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule{}