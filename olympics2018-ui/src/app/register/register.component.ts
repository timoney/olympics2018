import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: any = {};
  errorMsg: string;

  constructor(
    private userService: UserService,
    private router: Router) {}

  register() {
    this.userService.register(this.model)
      .subscribe(result => {
        if (result.success === true) {
          this.router.navigate(['/home']);
        } else {
          this.errorMsg = result.error;
        }
      });
  }
}
