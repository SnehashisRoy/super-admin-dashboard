import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PermissionService } from './../../../shared/services/permission.service';
import { Permission } from './../../../shared/models/permission';
import { Component, OnInit } from '@angular/core';
import{isNumeric} from 'rxjs/util/isNumeric';

@Component({
  selector: 'insert-permission-to-role',
  templateUrl: './insert-permission-to-role.component.html',
  styleUrls: ['./insert-permission-to-role.component.css']
})
export class InsertPermissionToRoleComponent implements OnInit {
  permissions:Permission[]=[];
  selectedPermissions:Permission[];
  id: number;
  allStatus:any[]=[];
  constructor(private permissionService:PermissionService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.permissionService.getPermissions()
          .subscribe(permissions=>{
            for(let permission of permissions){
              this.allStatus[permission.id]={id:permission.id, name:permission.name, value:permission.id, status:null};
              this.permissionService.getSelectedPermissions(params['id'])
                .subscribe(selectedPermissions=>{
                  for(let sp of selectedPermissions){
                    if(sp.id==permission.id){
                        this.allStatus[permission.id].status= permission.id;
                    }
                  }
                });
            }
          })
    })
  }
 
  onSubmit(){
   console.log('ok')
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

    this.permissionService.assignPermissionsToRole(id, body)
        .subscribe(res=>{
          console.log(res);
        })
    
    }

}


