import { Component, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';
import { DebtServiceService } from 'src/app/services/debt-service.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-vin-cha-rt',
  templateUrl: './vin-cha-rt.component.html',
  styleUrls: ['./vin-cha-rt.component.css']
})
export class VinChaRtComponent implements OnInit {
  debts: Array<Debt> = [];
  multi: any[];
  view: any[];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Debt Sum';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  constructor(private debtService: DebtServiceService) {

  }

  ngOnInit(): void {
    this.debtService.getAllDebt();

    this.debtService.viewAllDebts().subscribe(
      result => {
        this.debts = result;
        console.log(result)
      })
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
