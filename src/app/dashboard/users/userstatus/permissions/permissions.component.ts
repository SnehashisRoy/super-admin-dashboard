import { Permission } from './../../../../shared/models/permission';
import { ActivatedRoute } from '@angular/router';
import { PermissionService } from './../../../../shared/services/permission.service';
import{isNumeric} from 'rxjs/util/isNumeric';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  permissions: Permission[];
  allStatus: any[]=[]; 
 
  constructor(private permissionService: PermissionService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.params.subscribe(params=>{
    this.permissionService.getStandAlonePermissions(params['id'])
        .subscribe(permissions=>{
          for(let permission of permissions){
            this.allStatus[permission.id]={id:permission.id, value: permission.id, name:permission.name, status: null};
            this.permissionService.getUserPermissions(params['id'])
              .subscribe( userPermissions =>{
                console.log(userPermissions);
                for(let userPermission of userPermissions){
                  if(userPermission.id == permission.id){
                    this.allStatus[permission.id].status= permission.id;
                  }
                }
              })
          }
        })
    })
    console.log(this.allStatus);
  }

  onSubmit(){
    let id = this.route.snapshot.params['id'];
    let body = this.allStatus.map( res=>{
    if(res.status==true|| isNumeric(res.status)){
      return res.value;
    }
    }).filter(res=>{
    if(res!=null){
      return res;
    }
    })
    console.log(body);

    this.permissionService.assignPermissionsToUser(id, body)
        .subscribe(res=>{
          console.log(res);
        });
  }
}
