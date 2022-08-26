import { Component, Input, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';
import { User } from 'src/app/models/user';
import { DebtServiceService } from 'src/app/services/debt-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-debt-view',
  templateUrl: './debt-view.component.html',
  styleUrls: ['./debt-view.component.css']
})
export class DebtViewComponent implements OnInit {

  @Input()
  public debt: Debt = new Debt();
  debts: Array<Debt> = [];
  users: Array<User> = [];

  constructor(private debtService: DebtServiceService, private userService: UserServiceService,) { }

  ngOnInit(): void {

    console.log("Admin dash pre");
    this.userService.getUsersFromServer();
    this.debtService.getAllDebt();
    console.log("Admin dash post");

    this.debtService.viewAllDebts().subscribe(
      result => {
        this.debts = result;
        console.log(result)
      })
    this.userService.viewUsers().subscribe(
      result => {
        this.users = result;
        console.log(result)

      })



  }

}
