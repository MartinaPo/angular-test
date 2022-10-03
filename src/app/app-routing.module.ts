import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';


//var app = angular.module('myApp', ['ngRoute']);
const routes: Routes = [
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'ticket-details', component: TicketDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
