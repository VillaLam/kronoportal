import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User = new User();

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {

  }

  removeUser() {
    console.log("inside remove")
    this.service.deleteUser(this.user.userId).subscribe((res: any) => { });
  }

}
