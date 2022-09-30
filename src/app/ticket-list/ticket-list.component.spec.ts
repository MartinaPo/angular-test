import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComponent } from './ticket.list';

describe('TicketList', () => {
  let component: TicketList;
  let fixture: ComponentFixture<TicketList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
