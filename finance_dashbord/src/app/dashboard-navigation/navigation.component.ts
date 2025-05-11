import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  menuItemData = [
    {
      src: '../../assets/navigation-icons/dashboard.png',
      name: 'Dashboard',
      route: 'dashboard',
    },
    {
      src: '../../assets/navigation-icons/Calendar.png',
      name: 'Calender',
      route: 'calendar',
    },
    {
      src: '../../assets/navigation-icons/sms.png',
      name: 'Message',
      route: 'message',
    },
    {
      src: '../../assets/navigation-icons/Chart.png',
      name: 'Analytics',
      route: 'analytics',
    },
    {
      src: '../../assets/navigation-icons/team.png',
      name: 'Team',
      route: 'team',
    },
  ];

  menuItemProfile = [
    {
      src: '../../assets/navigation-icons/user.png',
      name: 'Profile',
      route: 'profile',
    },
    {
      src: '../../assets/navigation-icons/setting.png',
      name: 'Settings',
      route: 'settings',
    },
  ];

  menuItemSession = [
    {
      src: '../../assets/navigation-icons/info-circle.png',
      name: 'Help',
      route: 'help',
    },
    {
      src: '../../assets/navigation-icons/login.png',
      name: 'Logout',
      route: 'logout',
    },
  ];
}
