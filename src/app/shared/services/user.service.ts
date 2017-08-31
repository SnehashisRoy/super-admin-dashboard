import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

  url:string= 'http://RestAuth.app/api/users/';

  constructor(private http: HttpClient) {}

  getUsers():Observable<User[]>{
        // attaching a token
        // let headers = new Headers();
        // let token   = localStorage.getItem('auth_token');
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', `Bearer ${token}`);
        return this.http.get(this.url/*,{headers}*/)
                        .map( res => res['data'])
                        //.catch(this.handleError);
    }

}
