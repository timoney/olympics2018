import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventParticipantsComponent } from '../event-participants/event-participants.component'

@NgModule({
  imports: [
    CommonModule, 
    MatRadioModule, 
    EventsRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule
  ],
  declarations: [EventsComponent, EventParticipantsComponent],
  exports: [EventsComponent]
})
export class EventsModule { }
