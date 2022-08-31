import { Component, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';
import { User } from 'src/app/models/user';
import { DebtServiceService } from 'src/app/services/debt-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-my-debts',
  templateUrl: './my-debts.component.html',
  styleUrls: ['./my-debts.component.css']
})
export class MyDebtsComponent implements OnInit {
  debt: Debt = new Debt();
  debts: Array<Debt> = [];
  user: User = new User();

  constructor(private userService: UserServiceService, private debtService: DebtServiceService) {
    this.debt = new Debt()
  }

  ngOnInit(): void {
    this.fetchDebts()
    this.fetchUser()
  }


  fetchDebts() {
    let user = null;
    this.userService.getUserBySocialSecurityNumber(sessionStorage.getItem('socialSecurityNumber')).subscribe(
      (res) => {
        user = res;

        this.debtService.GetDebtByUserId(user.userId).subscribe((res: any) => {
          this.debts = res;
        })
      }
    )
  }

  fetchUser() {
    this.userService.getUserBySocialSecurityNumber(sessionStorage.getItem('socialSecurityNumber')).subscribe(
      (res) => {
        this.user = res;
      }
    )
  }

}
