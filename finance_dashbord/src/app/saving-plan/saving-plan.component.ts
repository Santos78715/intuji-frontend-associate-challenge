import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-saving-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving-plan.component.html',
  styleUrl: './saving-plan.component.css',
})
export class SavingPlanComponent {
  private savingsSubject = new BehaviorSubject([
    {
      title: 'Bali Vacation',
      amount: 100.21,
      total: 4000,
      targetDate: 'August 25 2022',
    },
    {
      title: 'New Gadget',
      amount: 790.21,
      total: 1000,
      targetDate: 'August 25 2022',
    },
    {
      title: 'Charity',
      amount: 32111,
      total: 100,
      targetDate: 'August 25 2022',
    },
  ]);

  savings$ = this.savingsSubject.asObservable();

  getPercentage(amount: number, total: number): number {
    return Math.min(Math.round((amount / total) * 100), 100);
  }

  getColorClass(percentage: number): string {
    if (percentage < 50) return 'purple';
    if (percentage < 80) return 'yellow';
    return 'green';
  }
}
