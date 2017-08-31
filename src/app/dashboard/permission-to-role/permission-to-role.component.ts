import { Role } from './../../shared/models/role';
import { RoleService } from './../../shared/services/role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission-to-role',
  templateUrl: './permission-to-role.component.html',
  styleUrls: ['./permission-to-role.component.css']
})
export class PermissionToRoleComponent implements OnInit {
  roles:Role[];
  constructor(private roleService:RoleService) { }

  ngOnInit() {
    this.roleService.getRoles()
        .subscribe( roles=>{
            this.roles= roles;
            //console.log(roles);
        })
    
  }

}
