import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'events-list',
  template: ` <div>
    <h1>{{ title }}</h1>
    <hr />
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail
          (click)="handleThumbnailClick(event.name)"
          [event]="event"
        ></event-thumbnail>
      </div>
    </div>
  </div>`,
})
export class EventsListComponent implements OnInit {
  public events: any[];

  public title = 'Upcoming Angular 2 Events';

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  public ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  public handleThumbnailClick(eventName): void {
    this.toastrService.success('Hello', eventName);
  }
}
