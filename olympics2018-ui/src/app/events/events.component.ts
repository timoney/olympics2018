import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event_information: any;
  read_only: boolean = false;
  errorMessage: any;
  user_id: number;
  user: any;
  eventsForm: FormGroup;
  event_id: number = 1;
  userDetails: any = {};

  constructor(
    public userService: UserService, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.user_id = +params['id']; 
    });  

    this.eventsForm = new FormGroup({
      'events': new FormArray([])
    });

    this.getUserDetails();
    this.getEvents();
  }

  getEvents() {
    this.userService.getUserEventSelections(this.user_id)
      .subscribe(
        events => {
          this.event_information = events; 
          this.read_only = this.event_information[0].read_only;
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
        'user_selection': new FormControl({value: this.event_information[i].user_selection, disabled: this.read_only})
      });
      (<FormArray>this.eventsForm.get('events')).push(group);
    }
  }

  onSubmit() {
    this.userService.recordUserEventSelections(this.user_id, this.eventsForm.value)
      .subscribe(result => {
        if (result.status === "success") {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = result.error;
        }
      });
  }

  getUserDetails() {
    this.userService.getUserDetails(this.user_id)
      .subscribe(
        details => {
          this.userDetails = details;
        },
        error => this.errorMessage = <any>error
      ); 
  }

  back() {
    this.router.navigate(['/home']);
  }
}
