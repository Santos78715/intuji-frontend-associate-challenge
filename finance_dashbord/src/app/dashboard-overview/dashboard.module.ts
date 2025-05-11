import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BalanceComponent } from './balance/balance.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomesComponent } from './incomes/incomes.component';
import { SavingsComponent } from './savings/savings.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    CardComponent,
    BalanceComponent,
    ExpensesComponent,
    IncomesComponent,
    SavingsComponent,
    OverviewComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    BalanceComponent,
    ExpensesComponent,
    IncomesComponent,
    SavingsComponent,
    OverviewComponent,
  ],
})
export class DashboardModule {}
