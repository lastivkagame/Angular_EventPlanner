import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventsComponent } from './events/events.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { EventsService } from './events/Events.service';
import { AddEventComponent } from './events/add-event/add-event.component';
import { FormsModule, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventListComponent,
    EventItemComponent,
    AddEventComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EventsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
