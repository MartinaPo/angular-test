import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

//var app = angular.module('myApp', ['ngRoute']);
const routes: Routes = [
{ path: 'ticket', component: TicketListComponent },
{ path: 'ticketRead', component: TicketDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
