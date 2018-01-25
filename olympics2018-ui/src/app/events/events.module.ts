import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports: [CommonModule, EventsRoutingModule],
  declarations: [EventsComponent],
  exports: [EventsComponent]
})
export class EventsModule { }
