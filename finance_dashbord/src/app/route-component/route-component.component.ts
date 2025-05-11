import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-route-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './route-component.component.html',
  styleUrl: './route-component.component.css',
})
export class RouteComponentComponent {}
