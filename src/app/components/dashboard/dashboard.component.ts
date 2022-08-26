import { Component, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';
import { User } from 'src/app/models/user';
import { DebtServiceService } from 'src/app/services/debt-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public users: Array<User> = [];

  debts: Array<Debt> = [];
  debt: Debt = new Debt();
  userId: number;
  httpClient: any;

  constructor(private userService: UserServiceService, private debtService: DebtServiceService) { }

  ngOnInit(): void {
    console.log("Admin dash pre");
    this.userService.getUsersFromServer();
    //this.debtService.getAllDebts();
    console.log("Admin dash post");

    this.userService.viewUsers().subscribe(
      result => {
        this.users = result;
        console.log(result)

      })


  }

}
