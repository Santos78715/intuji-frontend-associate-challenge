import { Component } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { interval } from 'rxjs';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent {
  chartOptions = {
    animationEnabled: false,
    exportEnabled: false,
    title: {
      text: 'Analytics',
      fontSize: 20,
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontWeight: 600,
      verticalAlign: 'top',
      horizontalAlign: 'left',
      margin: 40,
    },
    axisY: {
      gridColor: '#eee',
      tickLength: 0,
      interval: 5000,
      lineThickness: 0,
      labelFontColor: '#aaa',
      labelFontSize: 14,
      labelFormatter: function (e: any) {
        return `${e.value / 1000}k`;
      },
      margin: 5,
      gridDashType: 'dash',
    },
    axisX: {
      offset: false,
      margin: 0,
      lineThickness: 0,
      tickLength: 0,
      labelFontColor: '#aaa',
      labelFontSize: 14,
      viewportMinimum: 0,
      viewportMaximum: 6,
    },
    toolTip: {
      shared: true,
      content: '{name}: ${y}',
    },
    legend: {
      padding: 20,
      fontFamily: 'Plus Jakarta Sans',
      fontSize: 13,
      horizontalAlign: 'right',
      verticalAlign: 'top',
    },
    data: [
      {
        type: 'splineArea',
        showInLegend: true,
        markerSize: 0,
        name: 'Label1',
        color: '#5b52ff66',
        lineColor: '#5b52ff',
        legendMarkerType: 'circle',
        dataPoints: [
          { label: 'Sun', y: 5000, x: 0 },
          { label: 'Mon', y: 1000, x: 1 },
          { label: 'Tue', y: 6000, x: 2 },
          { label: 'Wed', y: 5334, x: 3 },
          { label: 'Thu', y: 22000, x: 4 },
          { label: 'Fri', y: 16022, x: 5 },
          { label: 'Sat', y: 64, x: 6 },
        ],
      },
      {
        type: 'splineArea',
        showInLegend: true,
        name: 'Label1',
        color: '#f2b93f44',
        lineColor: '#f2b93f',
        legendMarkerType: 'circle',
        dataPoints: [
          { label: 'Sun', y: 2000, x: 0 },
          { label: 'Mon', y: 13000, x: 1 },
          { label: 'Tue', y: 9000, x: 2 },
          { label: 'Wed', y: 26000, x: 3 },
          { label: 'Thu', y: 15000, x: 4 },
          { label: 'Fri', y: 20555, x: 5 },
          { label: 'Sat', y: 1222, x: 6 },
        ],
      },
    ],
  };
}
