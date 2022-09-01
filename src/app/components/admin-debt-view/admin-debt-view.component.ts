import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Debt } from 'src/app/models/debt';
import { User } from 'src/app/models/user';
import { DebtServiceService } from 'src/app/services/debt-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-admin-debt-view',
  templateUrl: './admin-debt-view.component.html',
  styleUrls: ['./admin-debt-view.component.css']
})
export class AdminDebtViewComponent implements OnInit {
  debt: Debt = new Debt();
  debts: Array<Debt> = [];
  user: User = new User();
  public findBySocialSecurityNumber: FormGroup;


  constructor(private userService: UserServiceService, private debtService: DebtServiceService, private fb: FormBuilder) {
    this.debt = new Debt()
    this.findBySocialSecurityNumber = this.fb.group({
      debtorSocialSecurityNumber: new FormControl(''),
    })
  }

  ngOnInit(): void {


  }

  fetch() {

    this.userService.getUserBySocialSecurityNumber(this.findBySocialSecurityNumber.controls["debtorSocialSecurityNumber"].value).subscribe(
      (res) => {
        this.user = res;
        this.debtService.GetDebtBySocialSecurityNumber(res.socialSecurityNumber).subscribe((res: any) => {
          console.log(res)
          this.debts = res;
        })

      }
    )
  }


  findDebtor() {
    this.fetch();

  }

}
