import { Component, Input, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';

@Component({
  selector: 'app-my-debt-card',
  templateUrl: './my-debt-card.component.html',
  styleUrls: ['./my-debt-card.component.css']
})
export class MyDebtCardComponent implements OnInit {

  @Input()
  debt: Debt = new Debt();

  constructor() { }

  ngOnInit(): void {
    console.log("debt-card triggered")
  }

}
