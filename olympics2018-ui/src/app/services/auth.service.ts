import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private router: Router) { }

    isLoggedIn() {
        if (localStorage.getItem('currentUser')) {
            this.loggedIn.next(true);
        } else {
            this.loggedIn.next(false);
        }
        return this.loggedIn.asObservable();
    }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            console.log('Auth Found!');
            // logged in so return true
            return true;
        }
        console.log('Auth not Found!');

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
