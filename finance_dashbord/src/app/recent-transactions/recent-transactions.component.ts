import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.css',
})
export class RecentTransactionsComponent {
  // Transactions data as an observable
  transactions$: Observable<any[]> = of([
    {
      name: 'Figma',
      date: 'August 20, 2022',
      amount: 100,
      status: 'Completed',
      image: '../../assets/platform-icon/gallery.png',
    },
    {
      name: 'Youtube',
      date: 'August 20, 2022',
      amount: 120,
      status: 'Completed',
      image: '../../assets/platform-icon/gallery.png',
    },
    {
      name: 'Spotify',
      date: 'August 20, 2022',
      amount: 15,
      status: 'Completed',
      image: '../../assets/platform-icon/gallery.png',
    },
    {
      name: 'Freepik',
      date: 'August 20, 2022',
      amount: 300,
      status: 'Completed',
      image: '../../assets/platform-icon/gallery.png',
    },
  ]);
}
