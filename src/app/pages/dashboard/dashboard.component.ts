import { Component, OnInit, viewChild } from '@angular/core';
import { ButtonComponent, MaterialModule } from '../../components';
import { NavbarComponent } from '../../layout/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { ShippingListComponent } from './shipping-list/shipping-list.component';
import { RadialBarChartComponent } from './graph/radialbar/radialbar.component';
import { HeatMapChartComponent } from './graph/heatmap/heatmap.component';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

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
    MatDatepickerModule,
    DatePickerModule,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  date = new Date();
}
