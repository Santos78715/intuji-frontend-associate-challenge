import { Routes } from '@angular/router';
import { DashboardAnalyticsComponent } from './dashboard-analytics/dashboard-analytics.component';
import { RouteComponentComponent } from './route-component/route-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard-analytics/dashboard-analytics.component').then(
        (m) => m.DashboardAnalyticsComponent
      ),
  },
  { path: 'calendar', component: RouteComponentComponent },
  { path: 'logout', component: RouteComponentComponent },
  { path: 'message', component: RouteComponentComponent },
  { path: 'analytics', component: RouteComponentComponent },
  { path: 'team', component: RouteComponentComponent },
  { path: 'profile', component: RouteComponentComponent },
  { path: 'settings', component: RouteComponentComponent },
  { path: 'help', component: RouteComponentComponent },
  { path: 'logout', component: RouteComponentComponent },
];
