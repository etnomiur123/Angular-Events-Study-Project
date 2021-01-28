import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  bootstrap: [EventsAppComponent],
  declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent],
  imports: [BrowserModule],
})
export class AppModule {}
