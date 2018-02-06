import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // for debugging

@Injectable()
export class EventService {

  public token: string;

  public api_proxy: string = 'http://ec2-13-59-65-197.us-east-2.compute.amazonaws.com:3000/';

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

  getEvents(): Observable<any> {
    let options = new RequestOptions({ headers: this.getTokenHeader()});
    return this.http.get(this.api_proxy + 'events', options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEventParticipants(event_id: number): Observable<any> {
    let options = new RequestOptions({ headers: this.getTokenHeader()});
    return this.http.get(this.api_proxy + 'eventParticipants/' + event_id, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body.data);
    return body.data || body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
