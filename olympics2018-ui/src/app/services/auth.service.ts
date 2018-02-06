import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { UserService } from './user.service';

@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.userService.loggedIn.next(true);
            return true;
        }
        // not logged in so redirect to login page
        this.userService.loggedIn.next(false);
        this.router.navigate(['/login']);
        return false;
    }
}
