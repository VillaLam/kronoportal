import { Component, Input, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';
import { User } from 'src/app/models/user';
import { DebtServiceService } from 'src/app/services/debt-service.service';

@Component({
  selector: 'app-debt-view',
  templateUrl: './debt-view.component.html',
  styleUrls: ['./debt-view.component.css']
})
export class DebtViewComponent implements OnInit {

  @Input()
  public debt: Debt = new Debt();
  debts: Array<Debt> = [];
  constructor(private debtService: DebtServiceService) { }

  ngOnInit(): void {

    this.debtService.getAllDebts()

  }

}
