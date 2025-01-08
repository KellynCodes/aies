import { Component } from '@angular/core';
import { ButtonComponent, MaterialModule } from '../../components';
import { NavbarComponent } from '../../layout/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { ShippingListComponent } from './shipping-list/shipping-list.component';
import { RadialBarChartComponent } from './graph/radialbar/radialbar.component';
import { HeatMapChartComponent } from './graph/heatmap/heatmap.component';

@Component({
  selector: 'aies-dashboard',
  imports: [
    NavbarComponent,
    ButtonComponent,
    MaterialModule,
    CardsComponent,
    RadialBarChartComponent,
    HeatMapChartComponent,
    ShippingListComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
