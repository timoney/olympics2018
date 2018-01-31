import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
//import { Event, EventParticipant, mock-events} from '../data-model';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.css']
})
export class EventParticipantsComponent implements OnInit {
  private _event_id = 0;
  participants : any;
  errorMessage: any;
  user_selection: any;
  
  eventForm = new FormGroup({
    winner: new FormControl()
  });

  @Input()
  set event_id(event_id: number) {
    this._event_id = event_id;
    this.participants = this.getEventParticipants();
    console.log(this.participants);
  }

  getEventParticipants() {
    this.eventService.getEventParticipants(this._event_id)
      .subscribe(
        participants => this.participants = participants,
        error => this.errorMessage = <any>error
      );
  }

  get event_id(): number { return this._event_id; }

  constructor(public eventService: EventService) { }

  ngOnInit() {
  }

}
