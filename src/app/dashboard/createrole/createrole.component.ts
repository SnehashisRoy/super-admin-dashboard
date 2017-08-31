import { Permission } from './../../shared/models/permission';
import { PermissionService } from './../../shared/services/permission.service';
import { FormGroup } from '@angular/forms';
import { Role } from './../../shared/models/role';
import { RoleService } from './../../shared/services/role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.css']
})
export class CreateroleComponent implements OnInit {
  roles:Role[];
  //newRole:Role;
  constructor(private service: RoleService,) { }

  ngOnInit() {
   // this.newRole = {id:null, name: " ", created_at: " ", updated_at: " "};
    this.service.getRoles()
        .subscribe( roles=>{
            this.roles=roles;
            console.log(roles);
        });
    
    
  }
  createNewRole(f:FormGroup){
   console.log(f.value);
    this.service.insertNewRole(f.value)
        .subscribe(role=>{
          this.roles.splice(0,0,role);
          console.log(this.roles);

        }
        );

  }

}
