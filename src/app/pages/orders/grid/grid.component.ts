import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input('ordersDisplay') ordersDisplay = [];

  constructor() {
  }

}
