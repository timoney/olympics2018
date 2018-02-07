import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  errorMsg: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // reset login status
    this.userService.logout();
  }

  login() {
    this.userService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result.success === true) {
          this.errorMsg =null;
          this.router.navigate(['/home']);
        } else {
          this.errorMsg= result.error;
        }
      });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
