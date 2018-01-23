import { Component, OnInit, Input } from '@angular/core';
import { EVENT_PARTICIPANTS } from '../mock-event-participants';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.css']
})
export class EventParticipantsComponent implements OnInit {
  private _event_id = 0;
  private event_participants = [];
  user_selection : number;

  @Input() 
  set event_id(event_id: number) {
    this._event_id = event_id;
    console.log(this.event_id);
    console.log(EVENT_PARTICIPANTS);
    this.event_participants = EVENT_PARTICIPANTS.filter(function (el) {
      console.log(el.event_id);
      console.log(event_id);
      return el.event_id== event_id;
    });

  }

  get event_id(): number { return this._event_id; }

  constructor() { }

  ngOnInit() {
  }

}
