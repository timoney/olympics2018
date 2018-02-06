import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '2018 Winter Olympics- PyeongChang';
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private userService: UserService ) {
    this.isLoggedIn$  = this.userService.isLoggedIn;
  }

  logout() {
    // clear token remove user from local storage to log user out
    this.userService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }

}
