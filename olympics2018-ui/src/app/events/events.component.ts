import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any;
  errorMessage: any;
  user: any;
  eventsForm: FormGroup;
  event_id: number = 1;

  constructor(
    public userService: UserService, 
    private router: Router ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.eventsForm = new FormGroup({
      'events': new FormArray([])
    });

    this.getEvents();
  }

  getEvents() {
    this.userService.getUserEventSelections(this.user.user_id)
      .subscribe(
        events => {
          this.events = events; 
          this.addEventsToForm();
        },
        error => this.errorMessage = <any>error
      );
  }

  addEventsToForm() {
    for (var i = 0, len = this.events.length; i < len; i++) {
      console.log(this.events[i]);
      const control = new FormControl(this.events[i]);
      (<FormArray>this.eventsForm.get('events')).push(control);
    }
  }

  submitPicks() {
    console.log("submitPicks");
  }
}
