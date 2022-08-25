import { Component, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  debts: Array<Debt> = [];
  debt: Debt = new Debt();
  userId: number;

  constructor() { }

  ngOnInit(): void {
  }

}
