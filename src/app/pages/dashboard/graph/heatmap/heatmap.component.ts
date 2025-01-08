import { HeatMapChartOptions } from '../../../../models/dashboard.model';
import { Component, viewChild } from '@angular/core';

import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'aies-heatmap-graph',
  imports: [NgApexchartsModule],
  templateUrl: './heatmap.component.html',
})
export class HeatMapChartComponent {
  chart = viewChild(ChartComponent);
  public chartOptions: Partial<HeatMapChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Nov',
          data: this.generateData(4, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Dec',
          data: this.generateData(3, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Jan',
          data: this.generateData(0, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Feb',
          data: this.generateData(2, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'March',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'April',
          data: this.generateData(5, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 150,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#DBD9F5', '#5549D2'],
    };
  }

  public generateData(count: number, yrange: { min: number; max: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
