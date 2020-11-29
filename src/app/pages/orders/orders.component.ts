import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { OrderRequest } from '../../models/orderRequest';
import { OrderResponse } from '../../models/orderResponse';
import { Form, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders = [];
  ordersDisplay = [];

  //Field responsible of displaying inputted values
  inputHistoric = ["morning", "night"];
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.inputHistoric.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(private orderService: OrderService) { }

  placeOrder(order: NgForm) {
    this.orderService.PlaceOrder(order.value)
      .subscribe((response: OrderResponse) => {

        if (response.dishes.length > 0) {
          //Store the original and treated response
          this.orders.push(response);
          this.validateOrderDisplay(response);


          //Store input into the search array
          if (this.inputHistoric.indexOf(order.value.request) < 0)
              if (response.dishes[0].name != "error")
                this.inputHistoric.push(order.value.request);
        }

        //Clear form
        order.reset();
      });
  }

  validateOrderDisplay(order: OrderResponse) {
    let desc = "";

    order.dishes.forEach((dish, index) => {
      desc += dish.name;

      if (dish.quantity > 1 && dish.allowMultiple)
        desc += "(x" + dish.quantity + ")"

      if (index < order.dishes.length - 1)
        desc += ", ";
    });

    this.ordersDisplay.splice(0, 0, desc);
  }

}
