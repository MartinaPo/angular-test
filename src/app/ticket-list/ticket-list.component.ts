import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticket.list.html',
  styleUrls: ['./ticket.list.css']
})
export class TicketListComponent implements OnInit {

  constructor() { }
    ngOnInit(): void {
  }

  display = false;
    onPress() {
      this.display = !this.display;
  }
}
