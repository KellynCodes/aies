import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../../../../models';

@Component({
  selector: 'aies-radialbar-graph',
  imports: [NgApexchartsModule],
  templateUrl: './radialbar.component.html',
  styles: [
    `
      @media (max-width: 600px) {
        :host {
          width: 100%;
          height: 100%;
        }
      }
    `,
  ],
})
export class RadialBarChartComponent {
  chart = ViewChild(ChartComponent);
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 67, 83],
      chart: {
        height: 220,
        width: 180,
        type: 'radialBar',
      },
      colors: ['#6B21A8', '#16A34A', '#0EA5E9', '#0D9488'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '10px',
            },
            value: {
              color: 'white',
              fontSize: '8px',
            },
            total: {
              show: true,
              label: 'Total',
              color: 'white',
              formatter: function (w) {
                return '249';
              },
            },
          },
        },
      },
      labels: [
        'Afr Air Basic',
        'Afr Air Standard',
        'Afr Ocean Basic',
        'Afr Ocean Standard',
      ],
    };
  }

  legendData = [
    { label: 'Afr Air Basic', color: '#6B21A8', value: '0%' },
    { label: 'Afr Air Standard', color: '#16A34A', value: '0%' },
    { label: 'Afr Ocean Basic', color: '#0EA5E9', value: '0%' },
    { label: 'Afr Ocean Standard', color: '#0D9488', value: '0%' },
  ];
}
