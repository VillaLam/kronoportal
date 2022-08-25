import { Component, OnInit } from '@angular/core';
import { DebtServiceService } from 'src/app/services/debt-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-temp-interface',
  templateUrl: './temp-interface.component.html',
  styleUrls: ['./temp-interface.component.css']
})
export class TempInterfaceComponent implements OnInit {

  constructor(private userservice: UserServiceService, private debtService: DebtServiceService) { }

  ngOnInit(): void {
    this.userservice.getUserBySocialSecurityNumber
    this.debtService.getAllDebts
  }

}
