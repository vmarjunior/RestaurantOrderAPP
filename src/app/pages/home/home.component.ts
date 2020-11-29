import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    //I would have created a navbar instead, but I realized that I needed to keep it more simple.
    this.router.navigateByUrl("orders");
  }

  ngOnInit() {
  }

}
