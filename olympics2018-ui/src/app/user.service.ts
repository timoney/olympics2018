import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // for debugging

@Injectable()
export class UserService {

  public token: string;

  public api_proxy: string = 'https://vbwp8o6p1i.execute-api.us-east-2.amazonaws.com/milb_api_proxy/';
  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  getTokenHeader(): Headers {
    let token = null;
    let user = localStorage.getItem('currentUser');
    console.log(user);
    if (user) {
      token = JSON.parse(user).token;
    }
    let headers = new Headers({ 'Authorization': token });
    return headers;
  }

  login(email: string, password: string): Observable<any> {
      let params = new URLSearchParams();
      params.append('email', email);
      params.append('password', password);
      return this.http.post(this.api_proxy + 'authenticate', params)
          //.do(data => console.log('server data:', data))  // debug
          .map(this.handleTokenResponse);
  }

  register(user: any): Observable<any> {
    let params = new URLSearchParams();
    params.append('frstNm', user.frstNm);
    params.append('lstNm', user.lstNm);
    params.append('emlTx', user.emlTx);
    params.append('password', user.password);
    return this.http.post(this.api_proxy + 'register', params)
        .map(this.handleTokenResponse);
  }

  logout(): void {
      // clear token remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

  private handleTokenResponse(res: Response) {
    let token = res.json() && res.json().token;

    if (token) {
        // set token property
        this.token = token;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify({ 'user_id': res.json().user_id, 'token': token }));

        // return true to indicate successful login
        return {success: true};
    } else {

        // return false to indicate failed login
        return res.json();
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || body || { };
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    console.log(error);
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
