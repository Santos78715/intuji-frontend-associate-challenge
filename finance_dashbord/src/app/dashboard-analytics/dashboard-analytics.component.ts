import { Component } from '@angular/core';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { DashboardModule } from '../dashboard-overview/dashboard.module';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { SavingPlanComponent } from '../saving-plan/saving-plan.component';
import { RecentTransactionsComponent } from '../recent-transactions/recent-transactions.component';

@Component({
  selector: 'app-dashboard-analytics',
  standalone: true,
  imports: [
    ToolbarModule,
    DashboardModule,
    RecentTransactionsComponent,
    SavingPlanComponent,
    AnalyticsComponent,
  ],
  templateUrl: './dashboard-analytics.component.html',
  styleUrl: './dashboard-analytics.component.css',
})
export class DashboardAnalyticsComponent {}
