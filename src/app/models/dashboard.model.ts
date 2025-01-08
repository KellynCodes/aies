import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexPlotOptions,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export interface CardDto {
  icon: string;
  title: string;
  amount: string;
  thisMonth: string;
  lastMonth: number;
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  colors: string[];
  labels: string[];
  plotOptions: ApexPlotOptions;
};

export type HeatMapChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
};

export interface ShippingListResponse {
  trackingId: string;
  courierImage: string;
  courier: string;
  category: string;
  shippingDate: string;
  destinationImage: string;
  destination: string;
  weight: string;
  cost: string;
  status: string;
}
