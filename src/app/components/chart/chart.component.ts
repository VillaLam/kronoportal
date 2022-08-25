import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartServiceService } from 'src/app/services/chart-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  title = 'Kronoportalen';
  result: any;
  amount: any; 
  planDuration: any; 
  chart: any = []

  constructor(private service: ChartServiceService) {
    Chart.register(...registerables);
    }

    ngOnInit() {
      this.service.debts().then((res) => {
        this.result = res

        console.log(this.result)        
         
       this.amount = this.result.map((debt: any) => debt.amount);
        this.planDuration = this.result.map((debt: any) => debt.planDuration);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.planDuration, 
            datasets: [{
                label: 'Kvarstående skuld',
                data: this.amount, 
                borderWidth: 3,
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
                backgroundColor: 'lightgray',
                tension: 0.1,
            }]
        },
        }) 
      })
  }
}




  