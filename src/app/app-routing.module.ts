import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {
    path:'book',
    component:BookListComponent,
  },
  {
    path:'order',
    component:OrderBookComponent,
  },
  {
    path:'home',
    component:AppComponent,
  },
  {
    path:'user',
    component:UsersComponent,

  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
