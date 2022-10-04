import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  AppComponent,
  TicketListComponent,
  TicketDetailsComponent,
  ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'ticket-list/ticket-list', component: TicketListComponent},
      {path: 'ticket-details/ticket-details', component: TicketDetailsComponent},
      {path: 'product/product', component: ProductComponent}
     // {path: '', redirectTo: 'app', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
