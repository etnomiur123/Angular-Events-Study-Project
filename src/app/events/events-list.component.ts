import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: ` <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr />
    <event-thumbnail [event]="event"></event-thumbnail>
  </div>`,
})
export class EventsListComponent {
  public event = {
    date: '9/26/2036',
    id: 1,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
    name: 'Angular Connect',
    price: 599.99,
    time: '10:00 am',
  };
}