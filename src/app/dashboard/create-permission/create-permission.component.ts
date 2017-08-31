import { FormGroup } from '@angular/forms';
import { PermissionService } from './../../shared/services/permission.service';
import { Permission } from './../../shared/models/permission';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.css']
})
export class CreatePermissionComponent implements OnInit {
  permissions: Permission[];
  constructor(private service: PermissionService) { }

  ngOnInit() {
    this.service.getPermissions()
        .subscribe(permissions=>{
          this.permissions=permissions;
          console.log(permissions);
        }
         
        )
  }
  createNewPermission(f:FormGroup){
    this.service.createNewPermission(f.value)
        .subscribe(
          permission=>{
            this.permissions.splice(0, 0, permission);
          }
        )
  }

}
