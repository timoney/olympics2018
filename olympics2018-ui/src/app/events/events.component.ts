import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event_information: any;
  errorMessage: any;
  user: any;
  eventsForm: FormGroup;
  event_id: number = 1;

  constructor(
    public userService: UserService, 
    private router: Router) {}

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
          this.event_information = events; 
          this.addEventsToForm();
        },
        error => this.errorMessage = <any>error
      );
  }

  addEventsToForm() {
    for (var i = 0, len = this.event_information.length; i < len; i++) {
      const group = new FormGroup({
        'event_id': new FormControl(this.event_information[i].event_id),
        'event_dt': new FormControl(this.event_information[i].event_dt),
        'event_nm': new FormControl(this.event_information[i].event_nm),
        'user_selection': new FormControl(this.event_information[i].user_selection)
      });
      (<FormArray>this.eventsForm.get('events')).push(group);
    }
  }

  onSubmit() {
    this.userService.recordUserEventSelections(this.user.user_id, this.eventsForm.value)
      .subscribe(result => {
        if (result.status === "success") {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = result.error;
        }
      });
  }
}
