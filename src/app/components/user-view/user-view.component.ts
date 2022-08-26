import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUsersFromServer();
    this.userService.viewUsers().subscribe(
      result => {
        this.users = result;
        console.log(result)

      })
  }

}
