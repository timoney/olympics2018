import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // for debugging
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  public token: string;

  public api_proxy: string = 'https://lf2sc7ye8l.execute-api.us-east-2.amazonaws.com/olympic_api/';

  public loggedIn = new BehaviorSubject<boolean>(false); // {1}

  constructor(private http: Http) {}

  getTokenHeader(): Headers {
    let token = null;
    let user = localStorage.getItem('currentUser');
    if (user) {
      token = JSON.parse(user).token;
    }
    let headers = new Headers({ 'Authorization': token });
    return headers;
  }

  login(email: string, password: string): Observable<any> {
      let params = new URLSearchParams();
      params.append('eml_tx', email);
      params.append('password', password);
      return this.http.post(this.api_proxy + 'login', params)
          .map(this.handleTokenResponse);
  }

  register(user: any): Observable<any> {
    let params = new URLSearchParams();
    params.append('frst_nm', user.frstNm);
    params.append('lst_nm', user.lstNm);
    params.append('group_nm', user.group);
    params.append('eml_tx', user.emlTx);
    params.append('password', user.password);
    return this.http.post(this.api_proxy + 'register', params)
        .map(this.handleTokenResponse);
  }

  getUserEventSelections(user_id: number): Observable<any> {
    let options = new RequestOptions({ headers: this.getTokenHeader()});
    return this.http.get(this.api_proxy + 'olympics18/users/' + user_id + '/eventSelections', options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  recordUserEventSelections(user_id: number, selections: any): Observable<any> {
    let options = new RequestOptions({ headers: this.getTokenHeader()});
    return this.http.post(this.api_proxy + 'olympics18/users/' + user_id + '/eventSelections', selections, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUserDetails(user_id: number): Observable<any> {
    let options = new RequestOptions({ headers: this.getTokenHeader()});
    return this.http.get(this.api_proxy + 'olympics18/users/' + user_id, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUserRules(user_id: number): Observable<any> {
    let options = new RequestOptions({ headers: this.getTokenHeader()});
    return this.http.get(this.api_proxy + 'olympics18/users/' + user_id + '/rules', options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUserRanking(): Observable<any> {
    var user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;
    let options = new RequestOptions({ headers: this.getTokenHeader()});
    return this.http.get(this.api_proxy + 'olympics18/users/' + user_id + '/ranking', options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  logout(): void {
    this.loggedIn.next(false);
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
        //this.thisObj.loggedIn.next(true);
        return {success: true, 'user_id': res.json().user_id};
    } else {
        // return false to indicate failed login
        //this.thisObj.loggedIn.next(false);
        return res.json();
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || body || { };
  }

  private handleError (error: any) {
    console.log(error);
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
