import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailsComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'ticket/ticket-list', component: TicketListComponent},
      {path: 'ticket/ticket-details', component: TicketDetailsComponent},
     // {path: '', redirectTo: 'app', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
