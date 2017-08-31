import { UserService } from './../../shared/services/user.service';
import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers()
        .subscribe(
          users =>{
            this.users = users;
          }
        )
  }

}
