import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { ProductComponent } from './product/product.component';


//var app = angular.module('myApp', ['ngRoute']);
const routes: Routes = [
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'ticket-details', component: TicketDetailsComponent },
  { path: 'product/product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
