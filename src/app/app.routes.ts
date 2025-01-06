import { Routes } from '@angular/router';
// import { authGuard, navigationGuard } from './guards';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    // canActivate: [authGuard],
    // canActivateChild: [authGuard],
  },

  {
    path: 'not-found',
    loadComponent: () =>
      import('./layout/notfound.component').then((c) => c.NotfoundComponent),
  },

  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
