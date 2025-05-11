import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardModule } from './dashboard-overview/dashboard.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { SavingPlanComponent } from './saving-plan/saving-plan.component';
import { NavigationComponent } from './dashboard-navigation/navigation.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { DashboardAnalyticsComponent } from './dashboard-analytics/dashboard-analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'finance_dashbord';
}
