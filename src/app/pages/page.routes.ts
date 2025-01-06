import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        data: {
          title: 'Dashboard',
          urls: [
            {
              title: 'Dashboard',
              url: '/dashboard',
              icon: '/svg/sidebar-icons/home.svg',
            },
          ],
        },
      },
    ],
  },
];
