import { Component } from '@angular/core';
import { ButtonComponent } from '../../components';
import { NavbarComponent } from '../../layout/navbar.component';

@Component({
  selector: 'aies-dashboard',
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
