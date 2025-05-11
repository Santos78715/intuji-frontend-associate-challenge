import { Component } from '@angular/core';
import { DashboardAnalyticsComponent } from '../dashboard-analytics/dashboard-analytics.component';
import { NavigationComponent } from '../dashboard-navigation/navigation.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardAnalyticsComponent, NavigationComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
