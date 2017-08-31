import { Response } from '@angular/http';
import { Permission } from './../models/permission';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PermissionService {
  permission:Permission[];
  constructor(private http: HttpClient) { }
    
  /**
   * get all permissions
   */
  
  getPermissions(): Observable<Permission[]>{
    return this.http.get('http://RestAuth.app/api/permissions')
      .map( permissions=>permissions['data'])
      .catch(this.handleError);

  }
  /**
   * insert new permission  
   * @param body 
   */
  createNewPermission(body): Observable<any> {
    return this.http.post('http://RestAuth.app/api/permissions', body)
      .map(res=> res['data'])
      .catch(this.handleError);
  }
 /**
  * get  all permissions assigned to a particualar role 
  * @param id 
  */
  getSelectedPermissions(id:number):Observable<Permission[]>{
      return this.http.get('http://RestAuth.app/api/roles/'+id+'/permissions')
        .map(res=>res['data'])
        .catch(this.handleError);
  }
/**
 * assign permissions to a particular role
 * @param id 
 * @param body 
 */
  assignPermissionsToRole(id:number, body){
      return this.http.post('http://RestAuth.app/api/roles/'+ id+'/permissions', body)
        .map(res=>res['data'])
        .catch(this.handleError);
 }
/**
 * get all the stand alone permissions that are not covered by roles
 * @param id 
 */
  getStandAlonePermissions(id:number):Observable<Permission[]>{
      return this.http.get('http://RestAuth.app/api/users/'+ id+'/standalonepermissions')
        .map(res=>res['data'])
        .catch(this.handleError);
  }
/**
 * get the permissins directly assigned to user
 * @param id 
 */
  getUserPermissions(id:number):Observable<Permission[]>
  {
      return this.http.get('http://RestAuth.app/api/users/'+ id+'/permissions')
         .map(res=>res['data'])
        .catch(this.handleError);
  }
/**
 * assign the stand alone permissions to user
 * @param id 
 * @param body 
 */
  assignPermissionsToUser(id:number, body):Observable<any>
  {
     return this.http.post('http://RestAuth.app/api/users/'+id+'/permissions', body)
        .map(res=>res['data'])
        .catch(this.handleError)
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
