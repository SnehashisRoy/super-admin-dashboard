import { InsertPermissionToRoleComponent } from './dashboard/permission-to-role/insert-permission-to-role/insert-permission-to-role.component';
import { PermissionToRoleComponent } from './dashboard/permission-to-role/permission-to-role.component';
import { CreatePermissionComponent } from './dashboard/create-permission/create-permission.component';
import { CreateroleComponent } from './dashboard/createrole/createrole.component';
import { UserstatusComponent } from './dashboard/users/userstatus/userstatus.component';
import { UsersComponent } from './dashboard/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ModuleWithProviders} from '@angular/core'
import{RouterModule, Routes} from '@angular/router';
export const routes: Routes =[
    {
        path: "",
        redirectTo:'/dashboard/users', // replace later with conten page
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        redirectTo: '/dashboard/users',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children:[
            {
                path: 'users',
                component: UsersComponent,
                children: [
                    {
                        path: ':id', 
                        component: UserstatusComponent,
                        
                    },                                     
                    
                ]
            }, 
            {
                path: 'createrole',
                component: CreateroleComponent
            },
            {
                path: 'create-permission',
                component: CreatePermissionComponent,

            },
            {
                path:'permission-to-role',
                component: PermissionToRoleComponent,
                children:[
                    {
                    path:':id',
                    component: InsertPermissionToRoleComponent
                    }
                ] 
                
            },
            // {
            //     path:'permission-to-role/:id',
            //     component: InsertPermissionToRoleComponent
            // }

        ] 
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);