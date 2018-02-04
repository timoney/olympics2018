import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails: any = {};
  userCredentials: any;
  errorMessage: any;
  rules: string;
  group_nm: string = "";
  displayedColumns = ['position', 'name', 'points'];
  dataSource = new UserRankingDataSource(this.userService);

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userCredentials = JSON.parse(localStorage.getItem('currentUser'));
    this.getUserDetails();
    this.getUserRules();
  }

  getUserDetails() {
    this.userService.getUserDetails(this.userCredentials.user_id)
      .subscribe(
        details => {
          this.userDetails = details;
          this.group_nm=details.group_nm;
        },
        error => this.errorMessage = <any>error
      );
  }

  getUserRules() {
    this.userService.getUserRules(this.userCredentials.user_id)
      .subscribe(
        rules => {
          this.rules = rules.rules;
        },
        error => this.errorMessage = <any>error
      );
  }

  editPicks() {
    this.router.navigate(['/picks', this.userCredentials.user_id]);
  }

}

export class UserRankingDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<any[]> {
    return this.userService.getUserRanking();
  }

  disconnect() {}
} 



