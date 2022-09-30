import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
