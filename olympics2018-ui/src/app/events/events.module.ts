import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    MatRadioModule, 
    EventsRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [EventsComponent],
  exports: [EventsComponent]
})
export class EventsModule { }
