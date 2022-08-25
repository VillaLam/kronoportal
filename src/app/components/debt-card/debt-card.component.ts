import { Component, Input, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';

@Component({
  selector: 'app-debt-card',
  templateUrl: './debt-card.component.html',
  styleUrls: ['./debt-card.component.css']
})
export class DebtCardComponent implements OnInit {
  @Input()
  debt: Debt = new Debt();

  constructor() { }

  ngOnInit(): void {
  }

}
