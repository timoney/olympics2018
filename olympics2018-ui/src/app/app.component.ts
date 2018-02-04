import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '2018 Winter Olympics- PyeongChang';

  constructor(private router: Router) {}

  isLoggedIn$: Observable<boolean>; 

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
  }

  logout() {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

}
