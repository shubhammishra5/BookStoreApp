import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule , AppRoutingModule],
  declarations: [ AppComponent, BookListComponent, OrderBookComponent, UsersComponent, HomeComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
