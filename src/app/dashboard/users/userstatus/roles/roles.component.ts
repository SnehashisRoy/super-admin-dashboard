import { FormGroup } from '@angular/forms';
import { Role } from './../../../../shared/models/role';
import { RoleService } from './../../../../shared/services/role.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{isNumeric} from 'rxjs/util/isNumeric';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  
  // roles:Role[];
  relatedRoles:Role[];
  allStatus =[];
  //data: any[]=[];

  constructor(private service: RoleService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    let id = this.route.params.subscribe(params=>{
    this.service.getRoles()
        .subscribe(
          roles=>{
            //console.log(roles);
            for(let role of roles){
              //console.log(role);
             this.allStatus[role.id] = {id: role.id, name: role.name, value:role.id, status: null };
             this.service.getRolesOfUser(params['id'])
              .subscribe(
                relatedroles=>{
                 for(let rr of relatedroles){
                   if(rr.id == role.id){
                     this.allStatus[role.id].status = role.id;
                   }
                }
           });
         }
        //console.log(this.allStatus);
        
      });
    })  
  
  
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

  this.service.insertRolesToUser(id, body)
      .subscribe(res=>{
        console.log(res);
      })
  
  
    
  }


}
