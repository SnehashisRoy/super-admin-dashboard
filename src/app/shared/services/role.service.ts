import { Role } from './../models/role';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http'

@Injectable()
export class RoleService {
  
  url:string='http://RestAuth.app/api/roles';
  constructor(private http: HttpClient) { }
  
  getRoles():Observable<Role[]>{
     return this.http.get(this.url)
      .map(res=>res['data'])
      .catch(this.handleError);
  }
  
  getRolesOfUser(id:number):Observable<Role[]>{
    return this.http.get('http://RestAuth.app/api/users/'+id+'/roles')
        .map(res=>res['data'])
        .catch(this.handleError);
  }
  insertRolesToUser(id:number, body:any[]):Observable<any>{
      return this.http.post('http://RestAuth.app/api/users/'+id+'/roles', body)
        .map(res=>res['data'])
        .catch(this.handleError);
  }
  insertNewRole(body):Observable<any>{
      return this.http.post('http://RestAuth.app/api/roles', body)
        .map(res=>res['data'])
        .catch(this.handleError);
  }
  
  private handleError(err){
      let errMessage:string;

      if(err instanceof Response){
          let body= err.json()||'';
          let error = body.error || JSON.stringify(body);
          errMessage = `${error.statusText || '' } ${error}`
      }else{
          errMessage=err.message?err.message:err.toString();

      }
      return Observable.throw(errMessage);
    }
 

}
