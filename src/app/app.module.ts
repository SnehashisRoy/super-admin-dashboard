import { PermissionService } from './shared/services/permission.service';
import { RoleService } from './shared/services/role.service';
import { UserService } from './shared/services/user.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { UserstatusComponent } from './dashboard/users/userstatus/userstatus.component';
import { RolesComponent } from './dashboard/users/userstatus/roles/roles.component';
import { PermissionsComponent } from './dashboard/users/userstatus/permissions/permissions.component';
import { CreateroleComponent } from './dashboard/createrole/createrole.component';
import { CreatePermissionComponent } from './dashboard/create-permission/create-permission.component';
import { PermissionToRoleComponent } from './dashboard/permission-to-role/permission-to-role.component';
import { InsertPermissionToRoleComponent } from './dashboard/permission-to-role/insert-permission-to-role/insert-permission-to-role.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UserstatusComponent,
    RolesComponent,
    PermissionsComponent,
    CreateroleComponent,
    CreatePermissionComponent,
    PermissionToRoleComponent,
    InsertPermissionToRoleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    UserService,
    RoleService,
    PermissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
