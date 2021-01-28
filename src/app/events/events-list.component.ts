import { Component, Input } from '@angular/core';

@Component({
  selector: 'events-list',
  template: ` <div>
    <h1>{{title}}</h1>
    <hr />
    <event-thumbnail #thumbnail
      [event]="event1"
    ></event-thumbnail>
    <button class="btn btn-primary" (click)='handleClick(thumbnail)'>click</button>
  </div>`
})
export class EventsListComponent {
  public event1 = {
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

  public title: string = 'Angular Events';

  public handleClick(thumbnail): void {
    this.title = thumbnail.changeTitle();
  }
}
