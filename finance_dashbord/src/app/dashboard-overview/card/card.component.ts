import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  cards = [
    {
      title: 'Main Balance',
      subtitle: '15% compared with last month',
      amount: '$280000',
      icon: '../../../assets/overview-icons/empty-wallet.png',
      trendIcon: '../../../assets/overview-icons/balance-up.png',
      arrowIcon: '../../../assets/overview-icons/arrow-right-w.png',
    },
    {
      title: 'Savings',
      subtitle: '10% compared with last month',
      amount: '$120000',
      icon: '../../../assets/overview-icons/saving.png',
      trendIcon: '../../../assets/overview-icons/saving-up.png',
      arrowIcon: '../../../assets/overview-icons/forward.png',
    },
    {
      title: 'Expenses',
      subtitle: '5% compared with last month',
      amount: '$89000',
      icon: '../../../assets/overview-icons/expense.png',
      trendIcon: '../../../assets/overview-icons/expense up.png',
      arrowIcon: '../../../assets/overview-icons/forward.png',
    },
    {
      title: 'Investments',
      subtitle: '20% compared with last month',
      amount: '$150000',
      icon: '../../../assets/overview-icons/income.png',
      trendIcon: '../../../assets/overview-icons/expense-up.png',
      arrowIcon: '../../../assets/overview-icons/forward.png',
    },
  ];
}
