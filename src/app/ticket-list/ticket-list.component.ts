import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

export class TicketListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  display = false;

  onPress() {
    //this.display = true;
    /*if you want the component to show and hide on click pressed, use
    use this line*/

    //console.log ('non ti ricordavi che dovevi premere f12, vero?')
    this.display = !this.display;
  }

}
